import Link from "next/link";
import Image from "next/image";
import styles from './Navbar.module.css';
import { GrMoreVertical } from "react-icons/gr";

const links = [
  { href: "/", label: "¿Cómo se usa?", key: "explorar" },
  { href: "/tienda", label: "Precios", key: "tienda" },
  { href: "/colaborar", label: "Nosotros", key: "nosotros" },
  { href: "/blog", label: "Blog", key: "blog" },
];

const NavbarComponent = () => (
  <nav className={styles.navbar}>
    <div className={styles['navbar__logo']}>
      <Link href="/">
        <Image src="/logo-b.png" alt="Logo" width={60} height={60} />
      </Link>
    </div>

    <div className={styles['navbar__navigation']}>
    {links.map(({ href, label, key }) => (
        <Link href={href} key={key}  style={{ textDecoration: 'none' }}>
            <span className={styles['navbar__item']}>{label}</span>
        </Link>
    ))}

    </div>

    <div className={styles['navbar__icons']}>
      <Link href="/usuario"  style={{ textDecoration: 'none' }}>
        <GrMoreVertical className={styles['navbar__icon']} />
      </Link>
    </div>
  </nav>
);

export default NavbarComponent;
