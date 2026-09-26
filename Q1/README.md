# Quilsbee Static Frontend

A simple static HTML/CSS/JS landing page with four options:
- Code Repo
- Web Link
- Demo Video
- Sample Comics

The Sample Comics reader contains the 11 pages from the supplied Quantum Academy Chapter 01 PDF.

## Run locally

No npm install is required.

```bash
python -m http.server 8080
```

Open http://localhost:8080

## Deploy

For Vercel, if this folder is inside a larger repository, set Root Directory to this folder and use:
- Framework Preset: Other
- Build Command: empty
- Output Directory: .
- Install Command: empty
