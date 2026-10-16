import Image from 'next/image';
import { FaCheck, FaCloudUploadAlt, FaCog, FaRegCalendarAlt, FaRegUser, FaRobot, FaShieldAlt } from 'react-icons/fa';
import { BlogDetailSectionProps } from '@/types/templates.types';

const renderFeatureIcon = (iconName?: string) => {
  switch (iconName) {
    case 'FaCog': return <FaCog aria-hidden="true" />;
    case 'FaCloudUploadAlt': return <FaCloudUploadAlt aria-hidden="true" />;
    case 'FaRobot': return <FaRobot aria-hidden="true" />;
    case 'FaShieldAlt': return <FaShieldAlt aria-hidden="true" />;
    default: return <FaCheck aria-hidden="true" />;
  }
};

export const BlogDetailSection = ({ data, postId }: BlogDetailSectionProps) => {
  if (!data) return null;

  const post = data.posts.find((item) => item.id === postId);
  const author = data.authors.find((item) => item.id === post?.authorId);
  if (!post || !author) return null;

  const [demandSection, technologySection, sustainabilitySection, opportunitiesSection] = data.detail.sections;
  if (!demandSection || !technologySection || !sustainabilitySection || !opportunitiesSection) return null;

  return (
    <section className="w-full bg-[var(--color-bg-main)] py-8 lg:py-12">
      <article className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-5xl text-3xl font-extrabold leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">{post.title}</h2>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[var(--color-text)]">
          <span className="flex items-center gap-2"><FaRegCalendarAlt className="text-[var(--color-accent)]" aria-hidden="true" />{post.date}</span>
          <span className="hidden h-5 w-px bg-[var(--color-border)] sm:block" aria-hidden="true" />
          <span className="flex items-center gap-2"><FaRegUser className="text-[var(--color-accent)]" aria-hidden="true" />{data.detail.authorLabel} {author.name}</span>
        </div>

        <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-lg bg-[var(--color-image-surface)]">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
        </div>
        <p className="mt-5 text-sm leading-7 text-[var(--color-text)] sm:text-base">{post.description}</p>

        <section className="mt-7">
          <h3 className="flex items-center gap-4 text-xl font-extrabold text-[var(--color-primary)] sm:text-2xl"><span className="h-0.5 w-10 bg-[var(--color-accent)]" aria-hidden="true" />{demandSection.number}. {demandSection.title}</h3>
          <div className="mt-4 grid grid-cols-1 items-center gap-5 md:grid-cols-2">
            <p className="text-sm leading-7 text-[var(--color-text)] sm:text-base">{demandSection.description}</p>
            <div className="relative aspect-[16/7] overflow-hidden rounded-lg bg-[var(--color-image-surface)]"><Image src={demandSection.image} alt={demandSection.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></div>
          </div>
        </section>

        <section className="mt-7">
          <h3 className="flex items-center gap-4 text-xl font-extrabold text-[var(--color-primary)] sm:text-2xl"><span className="h-0.5 w-10 bg-[var(--color-accent)]" aria-hidden="true" />{technologySection.number}. {technologySection.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text)] sm:text-base">{technologySection.description}</p>
          <div className="mt-4 grid grid-cols-1 gap-5 rounded-lg bg-[var(--color-bg-alt)] p-5 sm:grid-cols-2 sm:p-6">
            {technologySection.features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-lg text-[var(--color-on-accent)]">{renderFeatureIcon(feature.icon)}</span>
                <div><h4 className="font-bold text-[var(--color-primary)]">{feature.title}</h4><p className="mt-1 text-sm leading-5 text-[var(--color-text)]">{feature.text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h3 className="flex items-center gap-4 text-xl font-extrabold text-[var(--color-primary)] sm:text-2xl"><span className="h-0.5 w-10 bg-[var(--color-accent)]" aria-hidden="true" />{sustainabilitySection.number}. {sustainabilitySection.title}</h3>
          <div className="mt-4 grid grid-cols-1 items-center gap-5 md:grid-cols-2">
            <p className="text-sm leading-7 text-[var(--color-text)] sm:text-base">{sustainabilitySection.description}</p>
            <div className="relative aspect-[16/7] overflow-hidden rounded-lg bg-[var(--color-image-surface)]"><Image src={sustainabilitySection.image} alt={sustainabilitySection.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></div>
          </div>
        </section>

        <section className="mt-7">
          <h3 className="flex items-center gap-4 text-xl font-extrabold text-[var(--color-primary)] sm:text-2xl"><span className="h-0.5 w-10 bg-[var(--color-accent)]" aria-hidden="true" />{opportunitiesSection.number}. {opportunitiesSection.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text)] sm:text-base">{opportunitiesSection.description}</p>
          <ul className="mt-3 space-y-2">
            {opportunitiesSection.features.map((feature) => <li key={feature.id} className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text)] sm:text-base"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-[10px] text-[var(--color-on-accent)]"><FaCheck aria-hidden="true" /></span><span>{feature.text}</span></li>)}
          </ul>
        </section>

        <section className="mt-8 border-t border-[var(--color-border)] pt-7">
          <h3 className="flex items-center gap-4 text-xl font-extrabold text-[var(--color-primary)] sm:text-2xl"><span className="h-0.5 w-10 bg-[var(--color-accent)]" aria-hidden="true" />{data.detail.conclusionTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text)] sm:text-base">{data.detail.conclusionText}</p>
        </section>
      </article>
    </section>
  );
};
