import Translate from '../UI/Translate';
import RevealBox from '../UI/RevealBox';

export default function ContactSection() {
    return (
        <section id="contacts" className="space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 transition-colors duration-300">
                <h2 className="text-xl font-bold mb-4 text-slate-800">
                    <Translate fr="Besoin d'aide ?" en="Need help?" es="¿Necesitas ayuda?" de="Brauchen Sie Hilfe?" />
                </h2>
                <RevealBox className="flex items-center p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm transition-colors duration-300">
                    <div className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center mr-4 text-xl shadow-lg shrink-0">
                        <i className="fas fa-address-book"></i>
                    </div>
                    <div>
                        <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">
                            <Translate fr="Cendrine (Tapper ici)" en="Cendrine (Tap)" es="Cendrine (Tocar)" de="Cendrine (Tippen)" />
                        </p>
                        <div className="flex flex-col blur-text">
                            <a href="tel:0679314246" className="text-xl font-bold text-slate-800">06 79 31 42 46</a>
                            <a href="mailto:cendrine.montier0696@orange.fr" className="text-sm font-semibold text-blue-500 underline">Email</a>
                        </div>
                    </div>
                </RevealBox>
            </div>
            
            <div className="bg-red-50 p-6 rounded-3xl border border-red-100 transition-colors duration-300">
                <h2 className="text-xl font-bold mb-6 text-red-700 flex items-center">
                    <i className="fas fa-ambulance mr-2"></i> 
                    <Translate fr="Numéros d'urgence" en="Emergencies" es="Emergencias" de="Notfälle" />
                </h2>
                
                {/* FIXED BORDERS HERE */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                    <a href="tel:112" className="block bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:bg-red-50 transition-colors duration-300 active:scale-95">
                        <p className="text-2xl font-bold text-red-700">112</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">EURO SOS</p>
                    </a>
                    <a href="tel:18" className="block bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:bg-red-50 transition-colors duration-300 active:scale-95">
                        <p className="text-xl font-bold text-slate-800">18</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase"><Translate fr="Pompiers" en="Firefighters" es="Bomberos" de="Feuerwehr" /></p>
                    </a>
                    <a href="tel:17" className="block bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:bg-red-50 transition-colors duration-300 active:scale-95">
                        <p className="text-xl font-bold text-slate-800">17</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase"><Translate fr="Police" en="Police" es="Policía" de="Polizei" /></p>
                    </a>
                    <a href="tel:15" className="block bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:bg-red-50 transition-colors duration-300 active:scale-95">
                        <p className="text-xl font-bold text-slate-800">15</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">SAMU</p>
                    </a>
                </div>
                
                {/* FIXED BORDERS HERE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="tel:118418" className="block bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center px-4 hover:bg-red-50 transition-colors duration-300 active:scale-95">
                        <span className="font-bold text-sm text-slate-800">SOS Médecin</span>
                        <span className="font-bold text-red-600"><i className="fas fa-phone mr-2"></i>118 418</span>
                    </a>
                    <a href="tel:114" className="block bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center px-4 hover:bg-red-50 transition-colors duration-300 active:scale-95">
                        <span className="font-bold text-sm text-slate-800">
                            <Translate fr="Malentendants" en="Deaf assistance" es="Sordos" de="Hörgeschädigte" />
                        </span>
                        <span className="font-bold text-red-600"><i className="fas fa-phone mr-2"></i>114</span>
                    </a>
                </div>
            </div>
        </section>
    );
}