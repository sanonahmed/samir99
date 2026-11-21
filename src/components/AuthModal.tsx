import { useState, useEffect } from 'react';
import { X, Eye, EyeOff, ShieldAlert, CheckCircle2 } from 'lucide-react';
import type { TranslationDictionary } from '../data/translations';
import { validateAuthForm } from '../utils/catalogLogic';
import { BA99Logo } from './BA99Logo';

interface AuthModalProps {
  mode: 'login' | 'register' | null;
  t: TranslationDictionary;
  onClose: () => void;
  onSwitchMode: (mode: 'login' | 'register') => void;
  onSuccess: (username: string) => void;
}

export function AuthModal({
  mode,
  t,
  onClose,
  onSwitchMode,
  onSuccess,
}: AuthModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedAgeTerms, setAcceptedAgeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<ReturnType<typeof validateAuthForm>['errors']>({});
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    setErrors({});
    setSuccessMsg(null);
  }, [mode]);

  if (!mode) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateAuthForm({
      mode,
      username,
      password,
      confirmPassword,
      acceptedAgeTerms,
    });

    if (!result.valid) {
      setErrors(result.errors);
      setSuccessMsg(null);
      return;
    }

    setErrors({});
    const cleanUser = username.trim();
    setSuccessMsg(
      `${mode === 'login' ? t.auth.demoSuccessLogin : t.auth.demoSuccessRegister} ${cleanUser}`
    );
    window.setTimeout(() => {
      onSuccess(cleanUser);
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setAcceptedAgeTerms(false);
      onClose();
    }, 650);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[420px] rounded-2xl bg-[#222A42] border border-[#343D58] shadow-2xl shadow-black/60 overflow-hidden">
        {/* Top Modal Header */}
        <div className="px-6 pt-5 pb-4 bg-[#242C45] border-b border-[#343D58] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BA99Logo size="sm" />
            <h2 id="auth-modal-title" className="text-[17px] font-bold text-white">
              {mode === 'login' ? t.auth.loginTitle : t.auth.registerTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.gameModal.close}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#C1C9DC] hover:text-white hover:bg-[#313B58] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mode Segmented Tabs */}
        <div className="px-6 pt-4">
          <div className="grid grid-cols-2 gap-1.5 p-1 rounded-full bg-[#171B2B] border border-[#343D58]">
            <button
              type="button"
              onClick={() => onSwitchMode('login')}
              className={`py-1.5 rounded-full text-[13px] font-semibold transition-colors cursor-pointer ${
                mode === 'login'
                  ? 'bg-[#FF3035] text-white'
                  : 'text-[#C1C9DC] hover:text-white'
              }`}
            >
              {t.login}
            </button>
            <button
              type="button"
              onClick={() => onSwitchMode('register')}
              className={`py-1.5 rounded-full text-[13px] font-semibold transition-colors cursor-pointer ${
                mode === 'register'
                  ? 'bg-[#FF3035] text-white'
                  : 'text-[#C1C9DC] hover:text-white'
              }`}
            >
              {t.register}
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="p-6 space-y-4">
          {/* Username */}
          <div>
            <label
              htmlFor="ba99-auth-username"
              className="block text-[12.5px] font-medium text-[#C1C9DC] mb-1.5"
            >
              {t.auth.usernameLabel}
            </label>
            <input
              id="ba99-auth-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={t.auth.usernamePlaceholder}
              autoComplete="username"
              className="w-full h-[40px] px-3.5 rounded-lg bg-[#171B2B] border border-[#343D58] text-[13.5px] text-white placeholder:text-[#8993AC] focus:border-[#FF3035] focus:outline-none"
            />
            {errors.username && (
              <p role="alert" className="mt-1 text-[11.5px] text-[#FF6B6E]">
                {errors.username === 'required'
                  ? t.auth.errUsernameRequired
                  : t.auth.errUsernameShort}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="ba99-auth-password"
              className="block text-[12.5px] font-medium text-[#C1C9DC] mb-1.5"
            >
              {t.auth.passwordLabel}
            </label>
            <div className="relative">
              <input
                id="ba99-auth-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.auth.passwordPlaceholder}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                className="w-full h-[40px] pl-3.5 pr-10 rounded-lg bg-[#171B2B] border border-[#343D58] text-[13.5px] text-white placeholder:text-[#8993AC] focus:border-[#FF3035] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8993AC] hover:text-white p-1 cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p role="alert" className="mt-1 text-[11.5px] text-[#FF6B6E]">
                {errors.password === 'required'
                  ? t.auth.errPasswordRequired
                  : t.auth.errPasswordShort}
              </p>
            )}
          </div>

          {/* Confirm Password & 18+ Terms on Register */}
          {mode === 'register' && (
            <>
              <div>
                <label
                  htmlFor="ba99-auth-confirm"
                  className="block text-[12.5px] font-medium text-[#C1C9DC] mb-1.5"
                >
                  {t.auth.confirmPasswordLabel}
                </label>
                <input
                  id="ba99-auth-confirm"
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={t.auth.confirmPasswordPlaceholder}
                  autoComplete="new-password"
                  className="w-full h-[40px] px-3.5 rounded-lg bg-[#171B2B] border border-[#343D58] text-[13.5px] text-white placeholder:text-[#8993AC] focus:border-[#FF3035] focus:outline-none"
                />
                {errors.confirmPassword && (
                  <p role="alert" className="mt-1 text-[11.5px] text-[#FF6B6E]">
                    {t.auth.errPasswordMismatch}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-2.5 text-[12px] text-[#C1C9DC] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedAgeTerms}
                    onChange={(e) => setAcceptedAgeTerms(e.target.checked)}
                    className="mt-0.5 accent-[#FF3035] w-4 h-4 rounded shrink-0"
                  />
                  <span>{t.auth.ageTerms}</span>
                </label>
                {errors.acceptedAgeTerms && (
                  <p role="alert" className="mt-1 text-[11.5px] text-[#FF6B6E]">
                    {t.auth.errAgeRequired}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Demo Compliance Notice */}
          <div className="rounded-lg bg-[#171B2B] border border-[#343D58] px-3 py-2.5 flex items-start gap-2 text-[11.5px] text-[#8993AC]">
            <ShieldAlert className="w-4 h-4 text-[#FFD028] shrink-0 mt-0.5" />
            <span>{t.auth.demoComplianceNote}</span>
          </div>

          {successMsg && (
            <div
              role="status"
              className="rounded-lg bg-emerald-950/70 border border-emerald-700/60 px-3 py-2 flex items-center gap-2 text-[12.5px] text-emerald-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full h-[42px] rounded-full bg-[#FF3035] hover:bg-[#E52227] text-white text-[14px] font-bold shadow-md shadow-[#FF3035]/30 transition-all duration-150 cursor-pointer"
          >
            {mode === 'login' ? t.auth.submitLogin : t.auth.submitRegister}
          </button>

          <button
            type="button"
            onClick={() => onSwitchMode(mode === 'login' ? 'register' : 'login')}
            className="w-full text-center text-[12.5px] text-[#C1C9DC] hover:text-white transition-colors cursor-pointer"
          >
            {mode === 'login' ? t.auth.switchToRegister : t.auth.switchToLogin}
          </button>
        </form>
      </div>
    </div>
  );
}
