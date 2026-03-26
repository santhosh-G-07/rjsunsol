# RJ Sun Solution — Website Deployment Guide

This document is for the **deployment team** responsible for putting this website live on the company domain. Follow every step in order. Do not skip steps.

**Your starting point:** A **zip file** of this project, given to you by the developer.

---

## Quick terms (read this first)

| Term | Meaning |
|------|--------|
| **Zip file** | A compressed folder (e.g. `rjsunsol-website.zip`). You must **extract** (unzip) it before you can use the code. |
| **Extract / Unzip** | To open the zip and get a normal folder with all the project files inside. |
| **Terminal / Command line / CMD / PowerShell** | A window where you type text commands (not where you click with the mouse). We use it to run `npm` commands. |
| **Project root** | The main project folder (the one that contains a file named `package.json`). All commands in this guide must be run from inside this folder. |
| **Node.js** | Software that runs JavaScript on a server. This website needs Node.js to run. |
| **npm** | A tool that comes with Node.js. We use it to install dependencies and run the build. |
| **Build** | A process that turns the source code into something the server can run. You must run the build once before the site can go live. |
| **Dependencies** | External code (libraries) the project needs. Installing them means downloading all of them — that’s what `npm ci` does. |

---

## What you need before you start

- [ ] The **zip file** of the project (from the developer).
- [ ] A **computer or server** where you can extract the zip and run commands (Windows, Mac, or Linux).
- [ ] **Node.js** installed (see Prerequisites below).
- [ ] (For Vercel) A **Vercel account** (free sign-up at vercel.com).
- [ ] (For your own domain) Access to your **domain’s DNS settings** (where your company’s website address is managed — e.g. GoDaddy, Namecheap, Cloudflare, or your IT team).

---

## Prerequisites: Install Node.js

The website will not run without Node.js. Do this first.

### Check if Node.js is already installed

1. Open a **terminal**:
   - **Windows:** Press `Win + R`, type `cmd`, press Enter. Or search for “Command Prompt” or “PowerShell” and open it.
   - **Mac:** Press `Cmd + Space`, type “Terminal”, press Enter.
   - **Linux:** Open “Terminal” from your applications.
2. Type this and press Enter:
   ```bash
   node -v
   ```
3. **If you see a version number** (e.g. `v20.10.0`): Node.js is installed. Check that it’s 18 or higher. If yes, skip to “Step 1: Get the code”.
4. **If you see an error** like “'node' is not recognized” or “command not found”: Node.js is not installed. Install it as below.

### Install Node.js (if needed)

1. Go to **https://nodejs.org** in your browser.
2. Download the **LTS** version (Long Term Support) — the green button that says “LTS”.
3. Run the installer. Accept the default options. Make sure the option to “Add to PATH” (or similar) is checked.
4. **Close and reopen** your terminal (or restart the computer).
5. Run `node -v` again. You should see something like `v20.x.x` or `v18.x.x`.
6. Run:
   ```bash
   npm -v
   ```
   You should see a number like `10.x.x` or `9.x.x`. If both `node -v` and `npm -v` work, you’re ready.

---

## Step 1: Get the code

### 1.1 Receive and find the zip file

- Get the zip file from the developer (e.g. by email, USB, or shared drive).
- Note where it is saved (e.g. `Downloads`, `Desktop`). The file might be named something like `rjsunsol-website.zip` or `rjsunsol-website-main.zip`.

### 1.2 Extract (unzip) the file

You must **extract** the zip so you have a folder with all the files inside. Do not try to run anything from inside the zip file.

- **Windows:** Right‑click the zip file → **Extract All…** → Choose a folder (e.g. `C:\Projects` or `Desktop`) → **Extract**. You will get a new folder (e.g. `rjsunsol-website`).
- **Mac:** Double‑click the zip file. A folder with the same name (without `.zip`) will appear next to it.
- **Linux:** Right‑click → Extract, or in terminal: `unzip rjsunsol-website.zip`.

Remember the **full path** to the extracted folder. Examples:
- Windows: `C:\Users\YourName\Desktop\rjsunsol-website`
- Mac: `/Users/yourname/Desktop/rjsunsol-website`

### 1.3 Open a terminal in that folder

You will run all the following commands from **inside** the project folder.

- **Windows (Command Prompt or PowerShell):**
  1. Open Command Prompt or PowerShell.
  2. Type `cd` followed by a space, then **drag the project folder** into the terminal window — the path will be pasted. Press Enter.
  - Or type the path yourself, e.g.:
    ```bash
    cd C:\Users\YourName\Desktop\rjsunsol-website
    ```
- **Mac / Linux:**
  1. Open Terminal.
  2. Type:
     ```bash
     cd /path/to/rjsunsol-website
     ```
     Replace `/path/to/rjsunsol-website` with the real path (e.g. `~/Desktop/rjsunsol-website`).

**Check you’re in the right place:** Run:

```bash
dir
```

(On Mac/Linux use `ls` instead of `dir`.)

You must see a file named **`package.json`** in the list. If you see it, you are in the project root. If not, you are in the wrong folder — use `cd` again to go into the correct folder.

---

## Step 2: Install dependencies

The project uses external libraries. You must install them once before building or running the site.

### 2.1 Run the install command

Make sure you are in the project root (the folder that contains `package.json`). Then run:

```bash
npm ci
```

Type it exactly: `npm` then space then `ci`. Press Enter.

### 2.2 What you will see

- The terminal will print a lot of lines (downloading packages). This is normal.
- It can take **2–5 minutes** depending on your internet speed.
- **Success:** At the end you see something like “added XXX packages” and no red error text. The command prompt returns (you can type again).
- **Failure:** You see lines in red and a message like “npm ERR!”. See Troubleshooting below.

### 2.3 If you don’t have `package-lock.json`

- If `npm ci` says something like “Cannot find a package-lock.json file”, run this instead:
  ```bash
  npm install
  ```
- Then continue to Step 3.

---

## Step 3: Build for production

The “build” step prepares the website for production. You must do this once before the site can run or be deployed.

### 3.1 Run the build

Still in the project root, run:

```bash
npm run build
```

Press Enter.

### 3.2 What you will see

- The script first generates gallery data (from images in `public/images/`), then runs the Next.js build.
- You will see many lines of output. It may take **1–3 minutes**.
- **Success:** You see something like “Compiled successfully” and at the end “Route (app)” and a list of routes. The last line might say “Generating static pages” and then the command finishes without red errors.
- **Failure:** You see red text or “Error: …”. See Troubleshooting.

### 3.3 Do not skip this step

- The site will **not** work correctly if you skip the build.
- After a successful build, a folder named **`.next`** is created inside the project. You need this folder for the next step and for deployment.

---

## Step 4: Test the site on your machine (optional but recommended)

Before deploying to the real server or Vercel, you can run the site on your own computer to confirm everything works.

### 4.1 Start the server

In the project root, run:

```bash
npm start
```

Press Enter.

### 4.2 What you will see

- A line like: “▲ Next.js 14.x.x” and “- Local: http://localhost:3000”.
- The terminal will **not** return to the prompt — it stays “running”. That is correct.

### 4.3 Open the site in a browser

1. Open your web browser (Chrome, Edge, Firefox, etc.).
2. In the address bar type exactly: **http://localhost:3000**
3. Press Enter.
4. You should see the RJ Sun Solution website (home page). Click a few links to confirm pages load.

### 4.4 Stop the server

- Go back to the terminal where `npm start` is running.
- Press **Ctrl + C** (hold Ctrl, press C). The server stops and the command prompt returns.

If the site loaded correctly in the browser, your build is good and you can proceed to Step 5 (deploy).

---

## Step 5: Deploy to your hosting / company domain

Choose **one** of the options below. Option B (Vercel) is the simplest if you don’t have a server.

---

### Option A: Deploy on your own server (VPS, VM, or any machine with Node.js)

Use this if your company hosts the website on its own server (Linux/Windows VM, VPS, etc.).

#### A.1 Get the project onto the server

- **Either:** Copy the **entire project folder** (including `node_modules` and `.next`) to the server (e.g. with FTP, SCP, or shared drive).
- **Or:** Copy only the project files (no `node_modules`, no `.next`), then on the server open a terminal in that folder and run:
  ```bash
  npm ci
  npm run build
  ```

#### A.2 Run the site on the server

On the server, in the project root folder, run:

```bash
npm start
```

The site will listen on port 3000. So long as this command is running, the site is up.

#### A.3 Keep it running (process manager)

If you close the terminal or log out, the site will stop. To keep it running:

- **PM2 (common on Linux):**
  1. Install PM2: `npm install -g pm2`
  2. From the project root: `pm2 start npm --name "rjsunsol-web" -- start`
  3. To start it again after a reboot: `pm2 startup` and `pm2 save` (follow the instructions PM2 prints).
- **Windows:** Use a Windows Service or a tool like NSSM to run `npm start` as a service, or keep a dedicated terminal/PowerShell window open.

#### A.4 Expose it to the internet (reverse proxy and domain)

- The app runs on **port 3000** on the server. External users should not connect to port 3000 directly.
- Put a **reverse proxy** (e.g. Nginx or Apache) on the same server. Configure it to:
  - Accept requests for your company domain (e.g. `www.yourcompany.com`).
  - Forward those requests to `http://localhost:3000`.
  - Handle HTTPS (SSL) at the proxy (e.g. with Let’s Encrypt).
- Point your **domain’s DNS** (see “Domain and DNS” below) to this server’s IP (or hostname).

If your company has an IT/DevOps team, they usually handle A.3 and A.4.

---

### Option B: Deploy on Vercel and use your company domain

Vercel hosts the site for you and gives you a URL. You then point your company domain to Vercel so users see your domain (e.g. `www.yourcompany.com`) with HTTPS.

#### B.1 Create a Vercel account (if you don’t have one)

1. Go to **https://vercel.com** in your browser.
2. Click **Sign Up** (or Log In if you already have an account).
3. Sign up with email, or GitHub/GitLab/Bitbucket if you use them. Complete the sign‑up.

#### B.2 Create a new project and add the code

**If you have the project in Git (GitHub, GitLab, etc.):**

1. In Vercel dashboard, click **Add New…** → **Project**.
2. Import your Git repository (e.g. connect GitHub and select the repo). Click **Import**.
3. Vercel will detect Next.js. Leave the default settings (Build Command: `npm run build` or similar, Output: Next.js). Click **Deploy**.
4. Wait for the build to finish (usually 1–3 minutes). When it’s done, you’ll see a “Congratulations” page and a URL like `your-project.vercel.app`.

**If you only have the zip file (no Git):**

1. Extract the zip so you have the project folder on your computer.
2. Install Node.js and run **Step 1, 2, and 3** of this guide (get the code, `npm ci`, `npm run build`) so the project is ready.
3. In Vercel dashboard, click **Add New…** → **Project**.
4. Look for an option like **Deploy without Git** or **Upload** or **Import Third-Party Git**. If Vercel does not offer upload of a folder:
   - Push the project to a Git repository (GitHub/GitLab) first, then import that repo in Vercel as in the “If you have the project in Git” section above.
5. If you use the Vercel CLI: install it (`npm i -g vercel`), run `vercel` in the project root, and follow the prompts to link and deploy.

After deployment, note your project’s **Vercel URL** (e.g. `rjsunsol.vercel.app`).

#### B.3 Add your company domain in Vercel

1. In Vercel, open your **project** (click the project name).
2. Go to the **Settings** tab (top menu).
3. In the left sidebar, click **Domains**.
4. Under “Add Domain”, type your company domain, e.g.:
   - `www.yourcompany.com` (with www), or
   - `yourcompany.com` (without www), or both.
5. Click **Add** (or similar).
6. Vercel will show you what to do next: **Configure DNS**. It will show something like:
   - For `www.yourcompany.com`: Add a **CNAME** record: name `www`, value `cname.vercel-dns.com`.
   - For root `yourcompany.com`: Add an **A** record with the IP address Vercel gives you, or use their nameservers.
7. **Do not close this page** — you need these values for the next step.

#### B.4 Configure DNS at your domain provider

You must add the DNS records Vercel showed you at the place where your company’s domain is managed (registrar or DNS provider).

1. Log in to where your domain is managed (e.g. GoDaddy, Namecheap, Google Domains, Cloudflare, or your company’s IT portal).
2. Find the **DNS** or **DNS Management** or **Name Servers** section for your domain.
3. Add the record(s) Vercel asked for:
   - **For www (e.g. www.yourcompany.com):**
     - Type: **CNAME**
     - Name/Host: **www** (or sometimes `www.yourcompany.com` — follow your provider’s labels)
     - Value/Points to: **cname.vercel-dns.com**
     - TTL: 3600 or “Auto” is fine.
   - **For root domain (yourcompany.com):** Use the exact type and value Vercel shows (often an **A** record with an IP, or CNAME to `vercel-dns.com` — follow Vercel’s instructions).
4. Save the changes.
5. DNS can take from **5 minutes to 48 hours** to update. Vercel will show when your domain is connected (often a green checkmark in the Domains page).

#### B.5 Verify

- Open a browser and go to **https://www.yourcompany.com** (or whatever domain you added). You should see the RJ Sun Solution site over HTTPS.
- If it doesn’t work: double‑check the DNS records (no typos), wait a bit longer, and check Vercel’s Domains page for any error message.

---

### Option C: Deploy with Docker

Use this only if your company already uses Docker and you are comfortable with it.

1. In the **project root**, create a file named **`Dockerfile`** (no extension) with exactly this content:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

2. Build the image (from project root):

```bash
docker build -t rjsunsol-web .
```

3. Run the container:

```bash
docker run -p 3000:3000 rjsunsol-web
```

The site runs on port 3000 on the host. Use a reverse proxy (Nginx, etc.) in front of this container and point your domain to the server, same idea as Option A.4.

---

## Domain and DNS (plain explanation)

- **Domain** = the address people type to open your site (e.g. `www.yourcompany.com`).
- **DNS** = the system that translates that name into where the site actually lives (a server IP or another hostname like Vercel).
- **Registrar / DNS provider** = the place where your company bought the domain or where DNS is managed (e.g. GoDaddy, Namecheap, Cloudflare, or your IT team).
- **CNAME record** = “When someone asks for this name (e.g. www), send them to this other name” (e.g. `cname.vercel-dns.com`).
- **A record** = “When someone asks for this name, send them to this IP address.”

To use your company domain with this site, you must add the right DNS records (as Vercel or your server provider instructs) at that registrar/DNS provider. Until DNS is correct, the domain will not show this website.

**HTTPS:** On Vercel, HTTPS is automatic. On your own server, configure SSL (e.g. Let’s Encrypt) on the reverse proxy so users get `https://` and a padlock.

---

## Environment variables

The site works without any environment variables (canonicals, sitemap, and structured data will use the default domain). You may set the following if needed:

| Variable | Required? | Purpose |
|----------|-----------|---------|
| **NEXT_PUBLIC_SITE_URL** | No | The public URL of the site (e.g. `https://rjsunsol.in`). Used for canonical URLs, OpenGraph, sitemap, and structured data. If not set, the build uses `https://rjsunsol.in`. Set this when deploying to a different domain (e.g. staging or a custom domain that is not rjsunsol.in). |

- **Vercel:** In the project, go to **Settings → Environment Variables** and add `NEXT_PUBLIC_SITE_URL` with your live URL if it is not rjsunsol.in.
- **Your own server:** Create a file like `.env.production` in the project root (or set variables in the process manager). Example: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`. Do **not** commit `.env` or `.env.*.local` to the repo or share them in email.

---

## Folder structure (reference)

| Path | What it is |
|------|------------|
| `package.json` | List of dependencies and scripts. Must be present. |
| `package-lock.json` | Exact versions for `npm ci`. Should be in the zip. |
| `.next/` | Build output. Created by `npm run build`. Required to run `npm start`. |
| `public/` | Static files (images, etc.) served by the site. |
| `public/images/` | Gallery images. The build script reads this folder. If it’s missing or empty, the gallery may be empty. |
| `node_modules/` | Installed dependencies. Created by `npm ci` or `npm install`. Do not edit. |

---

## Troubleshooting

### “node is not recognized” / “command not found: node”

- Node.js is not installed or not in the PATH. Install Node.js from https://nodejs.org (see Prerequisites). Then close and reopen the terminal.

### “npm is not recognized” / “command not found: npm”

- Usually means Node.js is not installed correctly. Reinstall Node.js and make sure “Add to PATH” is selected. Restart the terminal.

### “Cannot find module” or “npm ci” / “npm run build” fails with red errors

- Make sure you are in the **project root** (the folder that contains `package.json`). Run `dir` or `ls` and check.
- Delete the folders `node_modules` and `.next` (if they exist). Then run:
  ```bash
  npm ci
  npm run build
  ```
- If you still get errors, copy the **full error message** and send it to the developer.

### “Port 3000 is already in use”

- Something else is using port 3000. Either close that program or use a different port:
  - **Windows (PowerShell):** `$env:PORT=3001; npm start`
  - **Mac/Linux:** `PORT=3001 npm start`
  Then open http://localhost:3001 in the browser.

### Gallery is empty or images don’t show

- Ensure the folder `public/images/` exists and contains image files. Then run `npm run build` again and redeploy.

### Site works at localhost but not on the company domain

- **Vercel:** Check the Domains page in Vercel; wait for DNS to propagate (up to 48 hours); confirm the DNS records at your registrar match exactly what Vercel shows.
- **Your own server:** Check that the reverse proxy is pointing to the correct port (e.g. 3000), that the firewall allows HTTP/HTTPS, and that the domain’s DNS points to your server’s IP.

### Build works on my machine but fails on Vercel / the server

- Make sure Node.js version on the server or Vercel is 18 or 20. Vercel usually sets this automatically; on your server run `node -v`. If the developer gave you a specific Node version, use that (e.g. with a `.nvmrc` file or environment setting).

---

## Final checklist (do every step)

- [ ] Node.js 18 or 20 installed; `node -v` and `npm -v` work.
- [ ] Zip file received and **extracted** to a folder.
- [ ] Terminal opened **in that folder** (project root); `dir`/`ls` shows `package.json`.
- [ ] Ran `npm ci` (or `npm install` if no lock file); finished without red errors.
- [ ] Ran `npm run build`; finished with “Compiled successfully” (or similar).
- [ ] (Optional) Ran `npm start`, opened http://localhost:3000, saw the site, then stopped with Ctrl+C.
- [ ] Chose deployment: **Option A** (own server), **Option B** (Vercel), or **Option C** (Docker).
- [ ] If Vercel: added project, deployed, added domain in Settings → Domains, then added DNS records at registrar.
- [ ] If own server: copied project, ran `npm start` (or PM2), configured reverse proxy and DNS.
- [ ] Opened the **company domain** in a browser and confirmed the site loads with HTTPS.

If anything is unclear or fails, note the **exact step number** and the **exact error message** (or a screenshot) and contact the developer or your IT/DevOps team.
