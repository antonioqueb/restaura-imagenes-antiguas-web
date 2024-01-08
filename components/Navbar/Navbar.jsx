import Link from "next/link";
import Image from "next/image";
import styles from './Navbar.module.css';
import { GrMoreVertical } from "react-icons/gr";






const NavbarComponent = () => (

  
  <nav className={styles.navbar}>
  
    <section className={styles['navbar__section--start']}>
      {/* Elemento: navbar__logo */}
      <div className={styles['navbar__logo']}>
        <Link href="/">
          {/* Modificador: navbar__logo-text */}
          <Image src="/logo-b.png" alt="Logo" width={90} height={50} /> 
          
        </Link>
      </div>
      
      {/* Elemento: navbar__navigation */}
      <div className={styles['navbar__navigation']}>
        <Link href="/explorar">
          {/* Modificador: navbar__item */}
          <span className={styles['navbar__item']}>¿Cómo se usa?</span>
        </Link>
        <Link href="/tienda">
          <span className={styles['navbar__item']}>Precios</span>
        </Link>
        <Link href="/colaborar">
          <span className={styles['navbar__item']}>Nosotros</span>
        </Link>
      </div>
    </section>

    <section className={styles['navbar__section--end']}>

      {/* Elemento: Boton call to action */}
      <div className={styles['navbar__cta']}>
        <Link href="/login">
          <button className={styles['navbar__cta-button']}>Iniciar sesión</button>
          
        </Link>
        <Link href="/register">
          <button className={styles['navbar__cta-button']}>Registrarse</button>
        </Link>
      </div>
      <div className={styles['navbar__icons']}>
      <div className={styles['navbar__user']}>
        <Link href="/usuario">
          <GrMoreVertical className={styles['navbar__icon']} />
        </Link>
      </div>
      </div>

    </section>

  </nav>
);

export default NavbarComponent;
