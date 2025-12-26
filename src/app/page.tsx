'use client'

import { useState } from 'react'

type Step = 'welcome' | 'identifier' | 'password' | 'register' | 'forgot_account' | 'forgot_password'


export default function Home() {
  const [step, setStep] = useState<Step>('welcome')
  const [identifier, setIdentifier] = useState('')

  // Registration form state
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerEmailConfirm, setRegisterEmailConfirm] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('')
  const [registerAvatarUrl, setRegisterAvatarUrl] = useState('')

  // Forgot account state (find account by email/user/phone)
  const [forgotAccountSearch, setForgotAccountSearch] = useState('')

  // Forgot password state (send recovery link)
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('')




  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 p-4">
      <div className="w-full max-w-md">
        {/* Welcome Screen */}
        {step === 'welcome' && (
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            {/* Illustration */}
            <div className="mb-10">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-500/30">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Bem-vindo
            </h1>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed">
              Acesse sua conta de forma segura e simples.<br />
              Gerencie seus dados com total privacidade.
            </p>

            {/* Continue Button */}
            <button
              onClick={() => setStep('identifier')}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              Continuar
            </button>

            {/* Footer */}
            <p className="mt-8 text-sm text-slate-400">
              Sistema de autenticação seguro
            </p>
          </div>
        )}

        {/* Identifier Screen */}
        {step === 'identifier' && (
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-2">
              Fazer login
            </h2>
            <p className="text-slate-500 text-center mb-8">
              Digite seu email, telefone ou nome de usuário
            </p>

            {/* Input */}
            <div className="mb-6">
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Email, telefone ou usuário"
                className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Continue Button */}
            <button
              onClick={() => identifier && setStep('password')}
              disabled={!identifier}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none mb-6"
            >
              Continuar
            </button>

            {/* Links */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setStep('register')}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Criar conta
              </button>
              <button
                onClick={() => setStep('forgot_account')}

                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Esqueci minha conta
              </button>
            </div>



            {/* Separator */}
            <div className="flex items-center mb-6">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="px-4 text-sm text-slate-400">ou</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              {/* Google Button */}
              <button className="w-full py-3 px-4 border-2 border-slate-200 rounded-full flex items-center justify-center gap-3 hover:bg-slate-50 hover:border-slate-300 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-slate-700 font-medium">Entrar com Google</span>
              </button>

              {/* Apple Button */}
              <button className="w-full py-3 px-4 bg-black rounded-full flex items-center justify-center gap-3 hover:bg-gray-800 transition-all">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-white font-medium">Entrar com Apple</span>
              </button>
            </div>

            {/* Back */}
            <button
              onClick={() => setStep('welcome')}
              className="w-full text-slate-500 hover:text-slate-700 text-sm py-2"
            >
              ← Voltar
            </button>

          </div>
        )}

        {/* Password Screen */}
        {step === 'password' && (
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            {/* User Info */}
            <div className="mb-8 pb-6 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-500">Fazendo login como</p>
                  <p className="font-semibold text-slate-900 truncate">{identifier}</p>
                </div>
              </div>
              <button
                onClick={() => setStep('identifier')}
                className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-semibold"
              >
                ← Alterar conta
              </button>
            </div>


            {/* Title */}
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Digite sua senha
            </h2>
            <p className="text-slate-500 mb-6">
              Insira a senha da sua conta
            </p>

            {/* Password Input */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Senha"
                className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="mb-6 text-right">
              <button
                onClick={() => setStep('forgot_password')}
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
              >
                Esqueci a senha
              </button>
            </div>


            {/* Sign In Button */}
            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300">
              Entrar
            </button>

            {/* Back */}
            <button
              onClick={() => setStep('identifier')}
              className="w-full mt-6 text-slate-500 hover:text-slate-700 text-sm py-2"
            >
              ← Voltar
            </button>
          </div>
        )}

        {/* Register Screen */}
        {step === 'register' && (
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
              Criar conta
            </h2>
            <p className="text-slate-500 text-center mb-8 text-sm">
              Preencha os dados para criar sua conta
            </p>

            {/* Form */}
            <form className="space-y-4">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Confirmar Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Confirmar email
                </label>
                <input
                  type="email"
                  value={registerEmailConfirm}
                  onChange={(e) => setRegisterEmailConfirm(e.target.value)}
                  placeholder="Repita seu email"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Senha */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Senha
                </label>
                <input
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  placeholder="Crie uma senha segura"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Confirmar Senha */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Confirmar senha
                </label>
                <input
                  type="password"
                  value={registerPasswordConfirm}
                  onChange={(e) => setRegisterPasswordConfirm(e.target.value)}
                  placeholder="Repita a senha"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Avatar URL */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  URL da foto de perfil <span className="text-slate-400">(opcional)</span>
                </label>
                <input
                  type="url"
                  value={registerAvatarUrl}
                  onChange={(e) => setRegisterAvatarUrl(e.target.value)}
                  placeholder="https://exemplo.com/sua-foto.jpg"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 mt-6"
              >
                Criar minha conta
              </button>
            </form>

            {/* Back */}
            <button
              onClick={() => setStep('identifier')}
              className="w-full mt-6 text-slate-500 hover:text-slate-700 text-sm py-2"
            >
              ← Voltar para login
            </button>
          </div>
        )}

        {/* Forgot Account Screen - Find account by email/user/phone */}
        {step === 'forgot_account' && (
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
              Encontrar minha conta
            </h2>
            <p className="text-slate-500 text-center mb-8 text-sm">
              Digite seu email, nome de usuário ou telefone para encontrar sua conta
            </p>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email, usuário ou telefone
                </label>
                <input
                  type="text"
                  value={forgotAccountSearch}
                  onChange={(e) => setForgotAccountSearch(e.target.value)}
                  placeholder="Digite para buscar sua conta"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300 mt-6"
              >
                Buscar conta
              </button>
            </form>

            {/* Back */}
            <button
              onClick={() => setStep('identifier')}
              className="w-full mt-6 text-slate-500 hover:text-slate-700 text-sm py-2"
            >
              ← Voltar para login
            </button>
          </div>
        )}

        {/* Forgot Password Screen - Send recovery link */}
        {step === 'forgot_password' && (
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
            </div>

            {/* User Info */}
            <div className="mb-6 pb-4 border-b border-slate-100 text-center">
              <p className="text-sm text-slate-500">Recuperando senha para</p>
              <p className="font-semibold text-slate-900">{identifier}</p>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
              Recuperar senha
            </h2>
            <p className="text-slate-500 text-center mb-8 text-sm">
              Enviaremos um link para redefinir sua senha
            </p>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Confirme seu email
                </label>
                <input
                  type="email"
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-300 mt-6"
              >
                Enviar link de recuperação
              </button>
            </form>

            {/* Back */}
            <button
              onClick={() => setStep('password')}
              className="w-full mt-6 text-slate-500 hover:text-slate-700 text-sm py-2"
            >
              ← Voltar
            </button>
          </div>
        )}

        {/* Footer */}



        <p className="text-center text-sm text-slate-400 mt-8">
          © 2025 Sistema de Login. Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}
