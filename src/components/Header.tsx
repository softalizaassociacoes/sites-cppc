"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";
import { navigation } from "@/content/site";
import { siteConfig } from "@/content/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="hidden border-b border-primary-100 bg-primary-950 text-primary-50 lg:block">
        <Container className="flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-300">
              {siteConfig.email}
            </a>
            <span className="text-primary-400">•</span>
            <span>{siteConfig.phone}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="hover:text-accent-300">
              Facebook
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-accent-300">
              Instagram
            </a>
            <a href={siteConfig.social.x} target="_blank" rel="noreferrer" className="hover:text-accent-300">
              X
            </a>
            <span className="text-primary-400">•</span>
            <a href={siteConfig.memberPortal} target="_blank" rel="noreferrer" className="hover:text-accent-300">
              Fazer login
            </a>
            <a
              href={siteConfig.memberPortal}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent-500 px-3 py-1 font-semibold text-primary-950 hover:bg-accent-400"
            >
              Associe-se
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/uploads/2024/12/IMG_6425.png"
            alt="CPPC - Corpo de Psicólogos e Psiquiatras Cristãos"
            width={220}
            height={68}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-primary-50 hover:text-primary-700"
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 fill-current">
                    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full w-64 rounded-xl border border-primary-100 bg-white p-2 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-primary-50 hover:text-primary-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-primary-200 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Alternar menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-primary-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navigation.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-ink hover:bg-primary-50"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <span>{mobileExpanded === item.label ? "−" : "+"}</span>
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-3 flex flex-col gap-1 border-l border-primary-100 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-md px-3 py-2 text-sm text-ink-soft hover:bg-primary-50"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-primary-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href={siteConfig.memberPortal}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-accent-500 px-4 py-2 text-center text-sm font-semibold text-primary-950"
            >
              Associe-se
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
