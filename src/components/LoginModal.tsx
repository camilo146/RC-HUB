import React, { useState } from 'react';
import { X, User, CheckCircle2, ShieldCheck } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogged(true);
    setTimeout(() => {
      setIsLogged(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl shadow-black z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isLogged ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-display font-extrabold text-xl text-white">
              ¡Bienvenido a BOX HUB!
            </h3>
            <p className="text-xs text-slate-400">Sesión iniciada correctamente.</p>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-3">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-display font-black text-2xl text-white">Ingresar a BOX HUB</h3>
              <p className="text-xs text-slate-400 mt-1">
                Accede a tus publicaciones, garage y mensajes de la comunidad.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                  Celular o Correo Electrónico
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    placeholder="310 123 4567 o piloto@boxhub.co"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                  Contraseña
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
            >
              Iniciar Sesión
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-2 font-mono-tech">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Acceso seguro para pilotos colombianos</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
