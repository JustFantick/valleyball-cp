import Image from "next/image";
import styles from "./page.module.scss";
import CustomLink from "@/components/custom-link/CustomLink";

export default function Home() {
  return (
    <main className={styles.home}>
      <h1>Волейбольна секція Unlimited power</h1>

      <div className={styles.twoBlocksSection}>
        <div className={styles.twoBlocksSection__image}>
          <Image src="/gym.jpg" fill alt="gym" sizes="(max-width: 768px) 400px, (max-width: 1200px) 550px" />
        </div>
        <div className={styles.twoBlocksSection__content}>
          <p>Команда “<em>Unlimited power</em>” запрошує Вас приєднатися до світу волейболу. Мастери спорту в якості тренерів і сучасні спортзали вже чекають на Вас на ігровому полі. Чекаємо на тебе! Разом до перемог!</p>

          <CustomLink href="/join-us">Вперед!</CustomLink>

        </div>

      </div>

      <div className={styles.paragraphs}>
        <p>
          “Unlimited power” - це сучасні та комфортні спортивні зали для занняття волейболом, що знаходяться на вул. Жовтнева 3а м.Запоріжжя.
        </p>
        <p>
          Зали облаштовані усім необхідним для тренування інвентарем, а тренери навчать майстерності гри як новачків, так і більш досвідчених гравців.
        </p>

      </div>

      <p>Наша команда приймає участь у різних змаганнях і виходять звідти переможцями.</p>

      <div className={styles.image}>
        <Image src="/gays.jpg" alt="gays.jpg" fill sizes="(max-width: 680px) 90vw, (max-width: 1200px) 634px" />
      </div>

      <p>Якщо виникли питання або якщо Ви хочете дізнатися більше, то <em>зв’яжіться з нами</em>.</p>

      <address className={styles.contactUs}>
        <Image src="/phone-image.jpg" alt="phone.jpg" width={140} height={150} />

        <a href="tel:+380986538575">+(380)986538575</a>
        <a href="tel:+380845952175">+(380)845952175</a>

      </address>

    </main>
  );
}
