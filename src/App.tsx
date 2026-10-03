import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { MarketplaceSection } from './components/MarketplaceSection';
import { GaragePreview } from './components/GaragePreview';
import { GarageMarketplaceBridge } from './components/GarageMarketplaceBridge';
import { CommunitySection } from './components/CommunitySection';
import { HowItWorks } from './components/HowItWorks';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PublishModal } from './components/PublishModal';
import { GarageModal } from './components/GarageModal';
import { LoginModal } from './components/LoginModal';
import { LegalModal } from './components/LegalModal';
import { MOCK_PRODUCTS } from './data/mockData';
import type { Product, CategoryId } from './types';
import { ArrowLeft, PlusCircle } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'marketplace' | 'garage'>('landing');
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState<boolean>(false);
  const [isGarageModalOpen, setIsGarageModalOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'terminos' | 'privacidad' | null>(null);

  // Sync with browser url pathname or popstate
  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname.replace(/^\//, '');
      if (path === 'marketplace') {
        setCurrentView('marketplace');
      } else if (path === 'garage') {
        setCurrentView('garage');
      } else if (path === 'publicar') {
        setCurrentView('landing');
        setIsPublishModalOpen(true);
      } else {
        setCurrentView('landing');
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    return () => window.removeEventListener('popstate', handleLocation);
  }, []);

  const navigateTo = (view: 'landing' | 'marketplace' | 'garage', sectionId?: string) => {
    setCurrentView(view);
    const path = view === 'landing' ? '/' : `/${view}`;
    window.history.pushState(null, '', path);

    if (view === 'landing' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenPublish = () => {
    setIsPublishModalOpen(true);
  };

  const handleOpenGarage = () => {
    setIsGarageModalOpen(true);
  };

  const handleOpenLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleSuccessAddProduct = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={(view, sectionId) => {
          if (view === 'marketplace') {
            navigateTo('marketplace');
          } else if (view === 'garage') {
            navigateTo('garage');
          } else {
            navigateTo('landing', sectionId);
          }
        }}
        onOpenLogin={handleOpenLogin}
        onOpenPublish={handleOpenPublish}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'landing' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onExploreMarketplace={() => {
                const el = document.getElementById('marketplace');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigateTo('marketplace');
                }
              }}
              onWantToSell={handleOpenPublish}
              onNavigateSection={(sectionId) => {
                const el = document.getElementById(sectionId);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            {/* 2. Integrated Search Bar with Quick Categories */}
            <section className="relative z-20 -mt-6 sm:-mt-8 mb-4">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onCategorySelect={(cat) => {
                  setSelectedCategory(cat);
                  const el = document.getElementById('marketplace');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                onPerformSearch={() => {
                  const el = document.getElementById('marketplace');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            </section>

            {/* 3. Featured Marketplace */}
            <MarketplaceSection
              products={products}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onViewProduct={(prod) => setSelectedProduct(prod)}
              onSeeAllMarketplace={() => navigateTo('marketplace')}
            />

            {/* 4. Garage Section */}
            <GaragePreview onCreateGarage={handleOpenGarage} />

            {/* 5. Connection between Garage & Marketplace */}
            <GarageMarketplaceBridge
              onExploreCompatible={() => {
                setSelectedCategory('repuestos');
                const el = document.getElementById('marketplace');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            {/* 6. Community Section */}
            <CommunitySection
              onExploreCommunity={() => {
                alert(
                  'Próximamente: Directorio interactivo de Pistas, Calendario de Carreras y Clubes RC en Colombia.'
                );
              }}
            />

            {/* 7. How it Works */}
            <HowItWorks />

            {/* 8. Final CTA */}
            <FinalCTA
              onExploreMarketplace={() => {
                const el = document.getElementById('marketplace');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigateTo('marketplace');
                }
              }}
              onCreateGarage={handleOpenGarage}
            />
          </>
        )}

        {/* Dedicated /marketplace view for prototype navigation */}
        {currentView === 'marketplace' && (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-8 border-b border-slate-800 mb-8">
              <button
                onClick={() => navigateTo('landing')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-orange-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver a la página principal</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-tech text-slate-400">
                  {products.length} Publicaciones disponibles
                </span>
                <button
                  onClick={handleOpenPublish}
                  className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs"
                >
                  Publicar artículo
                </button>
              </div>
            </div>

            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                Marketplace Completo RC HUB
              </h1>
              <p className="text-sm text-slate-400 mt-2">
                Encuentra vehículos de competición, bashing, repuestos originales y electrónica de alta gama en Colombia.
              </p>
            </div>

            <div className="mb-12">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
            </div>

            <MarketplaceSection
              products={products}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onViewProduct={(prod) => setSelectedProduct(prod)}
              onSeeAllMarketplace={() => {}}
            />
          </div>
        )}

        {/* Dedicated /garage view for prototype navigation */}
        {currentView === 'garage' && (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-8 border-b border-slate-800 mb-8">
              <button
                onClick={() => navigateTo('landing')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-orange-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver a la página principal</span>
              </button>

              <button
                onClick={handleOpenGarage}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-xs shadow-md shadow-orange-500/20"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Agregar nuevo vehículo</span>
              </button>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                Panel de Mi Garage
              </h1>
              <p className="text-sm text-slate-400 mt-1">
                Administra tu flota, bitácoras de pista y consulta repuestos compatibles.
              </p>
            </div>

            <GaragePreview onCreateGarage={handleOpenGarage} />

            <div className="mt-12">
              <GarageMarketplaceBridge
                onExploreCompatible={() => {
                  setSelectedCategory('repuestos');
                  navigateTo('marketplace');
                }}
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={(sectionId) => {
          if (currentView !== 'landing') {
            navigateTo('landing', sectionId);
          } else {
            const el = document.getElementById(sectionId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <PublishModal
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
        onSuccessAddProduct={handleSuccessAddProduct}
      />

      <GarageModal
        isOpen={isGarageModalOpen}
        onClose={() => setIsGarageModalOpen(false)}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
