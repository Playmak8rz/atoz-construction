# A to Z Construction Website

## Overview

Professional website for A to Z Construction, a full-service NYC construction company. Built as a pnpm workspace monorepo using TypeScript. The primary artifact is a React + Vite frontend-only website (no backend API needed).

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React 19 + Vite + Tailwind CSS v4
- **Routing**: wouter (client-side)
- **Animations**: framer-motion
- **Forms**: react-hook-form + zod validation
- **Icons**: lucide-react
- **UI Components**: shadcn/ui (Radix primitives)

## Website Structure

- **Home** (`/`) — Hero banner, services overview, featured projects, testimonials, trust badges, lead capture form
- **About** (`/about`) — Company story, mission, values, credentials
- **Services** (`/services`) — 15+ service categories with descriptions and imagery
- **Projects** (`/projects`) — Gallery/portfolio of featured construction work
- **Contact** (`/contact`) — Lead capture form, office address, phone, email

## Brand

- Colors: charcoal, black, white, steel gray with orange accent
- Style: bold, premium, NYC-inspired, industrial-professional
- Fully mobile responsive

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/atoz-construction run dev` — run website locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
