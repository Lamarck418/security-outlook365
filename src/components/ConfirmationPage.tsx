
import React, { useEffect, useState } from 'react';
import { CheckCircle, Mail, ChevronRight } from 'lucide-react';

const ConfirmationPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teams-blue via-blue-50 to-white">
      {/* Header Outlook Style */}
      <header className="bg-white shadow-sm border-b border-teams-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
<img
    src="/assets/outlook-logo.png"
    alt="Outlook Logo"
    className="w-6 h-6 object-contain"
  />
              <div className="text-xl font-semibold text-teams-gray-800">Microsoft Outlook</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="https://outlook.office.com/mail/" className="text-teams-gray-600 hover:text-teams-blue text-sm font-medium transition-colors">Accueil</a>
              <a href="https://outlook.office.com/mail/" className="text-teams-gray-600 hover:text-teams-blue text-sm font-medium transition-colors">Boîte de réception</a>
              <a href="https://outlook.office.com/mail/" className="text-teams-gray-600 hover:text-teams-blue text-sm font-medium transition-colors">Calendrier</a>
              <a href="https://outlook.office.com/mail/" className="text-teams-gray-600 hover:text-teams-blue text-sm font-medium transition-colors">Contacts</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-teams-gray-600 hover:text-teams-blue text-sm font-medium">Se connecter</button>
<a
  href="https://outlook.office.com/mail/"
  className="bg-teams-blue text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-teams-blue-dark transition-colors"
>
  Obtenir Outlook
</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          

          {/* Section CTA principale */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-gradient-to-br from-teams-blue/10 to-teams-purple/10 backdrop-blur-sm rounded-xl p-16 text-center border border-teams-blue/20 max-w-4xl mx-auto">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-teams-blue to-teams-blue-dark rounded-full mb-8 shadow-2xl">
  <img
    src="/assets/outlook-logo.png"
    alt="Outlook Logo"
    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
  />
</div>
                
                <h2 className="text-3xl font-semibold text-teams-gray-800 mb-6">
                  Votre demande de réinitialisation de mot de passe a bien été prise en compte
                </h2>
                <p className="text-lg text-teams-gray-600 mb-8 leading-relaxed">
                  Pour des raisons de sécurité, votre mot de passe actuel restera actif pendant 24 heures.
Vous recevrez un e-mail de confirmation une fois la modification validée.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
  href="https://outlook.office.com/mail/"
  target="_blank"
  rel="noopener noreferrer"
  className="group bg-teams-blue text-white px-8 py-4 rounded-sm text-lg font-medium hover:bg-teams-blue-dark transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
>
  <span>Accéder à Outlook</span>
  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</a>
<a
  href="https://outlook.office.com/mail/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-teams-blue border-2 border-teams-blue px-8 py-4 rounded-sm text-lg font-medium hover:bg-teams-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
>
  Centre de sécurité
</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Outlook Style */}
      <footer className="bg-teams-gray-50 border-t border-teams-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-teams-gray-800 mb-4">Outlook</h3>
              <ul className="space-y-2">
                <li><a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-600 hover:text-teams-blue transition-colors">Télécharger Outlook</a></li>
                <li><a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-600 hover:text-teams-blue transition-colors">Outlook sur le web</a></li>
                <li><a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-600 hover:text-teams-blue transition-colors">Outlook mobile</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-teams-gray-800 mb-4">Microsoft 365</h3>
              <ul className="space-y-2">
                <li><a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-600 hover:text-teams-blue transition-colors">Plans et tarifs</a></li>
                <li><a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-600 hover:text-teams-blue transition-colors">Applications Microsoft 365</a></li>
                <li><a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-600 hover:text-teams-blue transition-colors">OneDrive</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-teams-gray-800 mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-600 hover:text-teams-blue transition-colors">Centre d'aide</a></li>
                <li><a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-600 hover:text-teams-blue transition-colors">Formation Outlook</a></li>
                <li><a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-600 hover:text-teams-blue transition-colors">Communauté technique</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-teams-gray-800 mb-4">Entreprise</h3>
              <ul className="space-y-2">
                <li><a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-600 hover:text-teams-blue transition-colors">Microsoft 365 Entreprise</a></li>
                <li><a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-600 hover:text-teams-blue transition-colors">Exchange Online</a></li>
                <li><a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-600 hover:text-teams-blue transition-colors">Sécurité avancée</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-teams-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="text-lg font-semibold text-teams-blue">Microsoft</div>
              <span className="text-sm text-teams-gray-500">© Microsoft 2024</span>
            </div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-500 hover:text-teams-blue transition-colors">Confidentialité</a>
              <a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-500 hover:text-teams-blue transition-colors">Conditions d'utilisation</a>
              <a href="https://outlook.office.com/mail/" className="text-sm text-teams-gray-500 hover:text-teams-blue transition-colors">Accessibilité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConfirmationPage;
