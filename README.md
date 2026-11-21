# BA99 — Gaming Platform

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/sanonahmed/samir99)

Dark navy Bengali gaming entertainment platform featuring slots, fishing, live games, poker, sports, and lottery categories.

---

## 🚀 Deploy to Render

### Option 1: 1-Click Blueprint Deploy (Recommended)
Click the button above or:
1. Open [Render Blueprints](https://dashboard.render.com/blueprints/new).
2. Connect your GitHub repository: `sanonahmed/samir99`.
3. Render will automatically detect [`render.yaml`](render.yaml) and configure the static site, build command, and SPA routing rewrites.
4. Click **Apply**.

### Option 2: Manual Static Site Deploy
1. Go to [Render Dashboard](https://dashboard.render.com/) and click **New +** > **Static Site**.
2. Connect the `sanonahmed/samir99` repository.
3. Fill in the deployment settings:
   - **Name**: `ba99-gaming-platform` (or your choice)
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Under **Redirects/Rewrites**:
   - **Type**: `Rewrite`
   - **Source**: `/*`
   - **Destination**: `/index.html`
5. Click **Create Static Site**.

---

## 💻 Local Development

**Prerequisites:** Node.js (v18+)

1. Clone the repository:
   ```bash
   git clone https://github.com/sanonahmed/samir99.git
   cd samir99
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```
