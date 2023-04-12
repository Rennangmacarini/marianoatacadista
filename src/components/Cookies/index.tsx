import Link from 'next/link';
import { CookieConsent } from 'react-cookie-consent';
import styles from './styles.module.scss'

export function Cookie() {
  return (
    <CookieConsent 
    style={{background: 'var(--gray-100)', marginBottom: '1rem', textAlign: 'justify', width: '350px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '1rem'}}
    buttonStyle={{ color: 'black', background: 'var(--bg-term)', borderRadius: '8px', padding: '0.5rem 1rem', fontWeight: "bold"}}
    buttonText="Confirmar"
    expires={365}
    > 
      <div className={styles.cookies}>
        <h1>
          Salvamos dados da sua visita para melhorar a sua experiência de
          navegação e mostrar ofertas que combinam com você, além da otimização
          do desempenho e segurança do site. você pode configurar suas
          preferências e conferir nossa <Link href={"/privation"}>política de privacidade.</Link>
        </h1>
      </div>
    </CookieConsent>
  );
}