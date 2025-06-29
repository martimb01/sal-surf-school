import WaveBg from '@/components/ui/WaveBg';
import styles from './page.module.css';
import { VT323 } from 'next/font/google';
import Image from 'next/image';

// VT323 Font properties
const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
});

export default function Page() {
  return (
    <>
      <main className={`${styles.main} ${vt323.className}`}>
        <h1>About us</h1>
        <h2>Origin</h2>
        <p>
          Sal Surfing School is a project that was born in April 2012, created by Tomé and Sílvia.
          As the name suggests, it is a school for sliding sports both on land and in the water,
          such as Surfing, Bodyboarding, Paddleboarding, Skating, etc. It includes three water-based
          surfing disciplines and one land-based discipline.
        </p>
        <br />
        <p>
          Originally, it was created under the name &quot;Soul Surf School&quot;, but in 2015 we decided to change
          the name, image, and the way we communicated with our surfers. That&apos;s when Sal Surfing School was born — a project
          that aimed to fill some of the gaps that had existed up to that point.
        </p>
        <br />
        <p>
          We created Sal Surfing School to address a gap in the surf school market. Our goal was to create a school with its own
          methodology, with purpose, and focused on the technical and pedagogical training of its coaches — supported by literature
          in the field, while also providing a relaxed and close-knit environment for students and their families. We focused on group
          lessons, but not in mass settings, identifying learning levels and corresponding age groups in order to create homogeneous
          groups suited to the specific needs of each student. At Sal Surfing School, we do not mix very different skill levels or age
          ranges, because above all, we aim to create an excellent environment where learning is a process, and each student has
          their own space and time to learn.
        </p>
        <br />
        <p>
          Sal Surfing School has grown into a well-structured school where values, rules, and standards are very clear for all students and families.
        </p>
        <br />
        <p>
          Sal Surfing School has been built and felt above all as a family of lovers of outdoor sports, which it truly is. We like to be known for the
          attention and dedication we give to our surfers, as well as for the safety, personal relationships, and bonds created during the time we spend
          together, sharing our knowledge with those who come to us. We are not a mass-market school — we are a small family where there is more than
          enough care and attention for everyone.
        </p>
        <br />
        <p>
          To fulfill its goals and mission, SAL Surfing School genuinely dedicates its time to teaching new sports in a personalized and professional manner,
          delivered by professionals duly certified by the relevant governing institutions. Additionally, they are &quot;certified&quot; by the standards and requirements
          that SAL Surfing School sets for itself and demands from each of its professionals.
        </p>
        <br />
        <br />
        <br />
        <h2>SAL&apos;s Teaching Methodology</h2>
        <p>
          There was a need to develop and create, in the image of our technical director, five learning levels for all students, always aiming to provide the best
          tools and technical knowledge to help them become autonomous, independent, and responsible. Thus, Sal created five learning levels: Espumas (Foam),
          Caloiros (Freshmen), Verdes (Greens), Esperanças (Hopes), and Prós (Pros). For each of these stages, there are specific objectives that students must achieve
          to progress to the next level.
        </p>
        <br />
        <br />
        <br />
        <h2>Benefits</h2>
        <p>
          Regarding the benefits these sports practices bring to participants, we must say that surfing encompasses sports that provide a general sense of well-being,
          improve physical capacity, increase concentration levels, and instill discipline and rules. It also helps with motor coordination, and in the case of water-based
          activities, offers all the known benefits of iodine for the human body. As outdoor activities, they give us a feeling of space and freedom that helps relieve the
          stress of everyday life.
        </p>
        <br />
        <p>
          Additionally, since one of SAL&apos;s goals is to promote the general well-being of our surfers, by taking advantage of natural resources and our climate to combine sports
          and nature, we are aware of the importance of raising awareness, especially among younger generations, about environmental issues and the protection of our natural heritage.
          On the other hand, we also recognize the need to rescue ourselves from widespread sedentary lifestyles and apathy.
        </p>
        <br />
        <p>
          In this sense, we believe it is valuable to use the relaxed and &quot;natural&quot; atmosphere that surfing activities provide as a way to escape apathy and help our students become
          more proactive, healthy individuals with environmental awareness — more responsible and engaged in environmental protection.
        </p>
        <br />
        <p>
          Combining these sports, which are currently very popular and so closely connected to nature, with environmental protection and awareness activities, allows us to teach the
          importance of preserving the sea, beaches, and surrounding areas in a more appealing and educational way — enhancing values and attitudes aimed at respect for Nature.
        </p>
      </main>
    <video
        className={styles.video}
        autoPlay
        playsInline
        muted
        loop
        src="/ui/barrel.mp4"
    >
    </video>
    </>
  );
}
