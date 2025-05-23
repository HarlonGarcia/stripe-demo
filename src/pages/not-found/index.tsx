import { AlertTriangle } from 'lucide-react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
      <AlertTriangle className="text-orange-500 w-20 h-20 mb-4 animate-wiggle" />

      <h1 className="text-6xl font-bold text-orange-500 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Página não encontrada</h2>

      <p className="text-gray-600 mb-8 max-w-md">
        A página que você está tentando acessar não existe ou foi movida.
      </p>

      <Link
        to="/"
        className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors"
      >
        Voltar para o início
      </Link>
    </div>
  )
}
