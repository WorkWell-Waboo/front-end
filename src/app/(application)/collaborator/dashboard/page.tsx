function CollaboratorDashboardPage() {
	return (
		<main className="p-10 grid grid-cols-2 gap-4">
			<div className="bg-gradient-to-r from-primary to-primary/50 p-5 rounded-lg">
				<h2 className="font-medium text-2xl text-white mb-2"><span>Olá, Mariana Lemos</span></h2>
				<p className="font-normal text-sm text-white ">Bem-vinda! Que tal dar o próximo passo no cuidado com você? Escolha um profissional e agende um horário para sua sessão.</p>
			</div>
			<div className="bg-white border-b-2 border-b-primary p-5 rounded-lg">
				<div className="flex justify-between items-center">
					<h2 className="">Sessões disponíveis</h2>
					<div className="flex gap-2">
						
					</div>
				</div>
				
				<p className="text-white">Bem-vinda! Que tal dar o próximo passo no cuidado com você? Escolha um profissional e agende um horário para sua sessão.</p>
			</div>
		</main>
	);
}

export default CollaboratorDashboardPage;
