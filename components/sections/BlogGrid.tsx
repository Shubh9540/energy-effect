import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { BlogGridProps } from '@/types/templates.types';

export const BlogGrid = ({ data }: BlogGridProps) => {
  if (!data?.posts.length) return null;

  const visiblePosts = Array.from(
    { length: data.itemsPerPage },
    (_, index) => data.posts[index % data.posts.length],
  );

  return (
    <section className="w-full bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[var(--color-accent)]" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)] sm:text-sm">{data.subtitle}</p>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
            {data.title1} <span className="text-[var(--color-accent)]">{data.highlightedTitle}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base">{data.description}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post, index) => (
            <article key={`${post.id}-${index}`} className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[0_8px_24px_var(--color-shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
              <Link href={post.url} className="relative block aspect-[16/9] overflow-hidden bg-[var(--color-image-surface)]">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-white text-center shadow-md">
                  <span className="text-xl font-extrabold leading-none text-[var(--color-accent)]">{post.day}</span>
                  <span className="mt-1 text-[9px] font-semibold leading-none text-[var(--color-primary)]">{post.monthYear}</span>
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <span className="w-fit rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">{post.category}</span>
                <Link href={post.url} className="mt-3">
                  <h3 className="text-lg font-extrabold leading-tight text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-accent)] sm:text-xl">{post.title}</h3>
                </Link>
                <p className="mt-2 line-clamp-3 text-sm leading-5 text-[var(--color-text)]">{post.description}</p>
                <Link href={post.url} className="mt-auto inline-flex items-center gap-3 pt-5 text-sm font-bold text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]">
                  <span>{data.readMoreText}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-xs text-[var(--color-on-accent)]"><FaArrowRight aria-hidden="true" /></span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
