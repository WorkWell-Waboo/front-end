import '@/styles/globals.css';
import { Lexend } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'], // Subconjuntos de caracteres
  weight: ['100','200','300','400','500','600','700','800','900'], // Pesos que você deseja usar
  display: 'swap',
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={`${lexend.className} antialiased`}>{children}</body>
		</html>
	);
}
