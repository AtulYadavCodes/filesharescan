# QR File Share (Client-Side Only)

This is a simple client-side tool that uploads a file to **Cloudinary**, generates a direct download link, and converts that link into a **QR code** so it can be scanned for easy file sharing.

> ⚠ **Important:**
> This project is intended for **personal use only**.
> It does **not** have a backend and directly exposes Cloudinary credentials (`cloud name` and `upload preset`) in the frontend code.
> Anyone who views your site’s source can see these credentials and upload files to your Cloudinary account.

---

## Features

* Uploads files to Cloudinary directly from the browser.
* Modifies the uploaded file URL to create a downloadable link (`fl_attachment`).
* Generates a QR code for the download link using [goqr.me API](https://goqr.me/api/).
* Works entirely client-side without a backend.

---

## How It Works

1. User selects a file and submits the form.
2. File is uploaded to Cloudinary using the exposed `CLOUD_NAME` and `upload_preset`.
3. The returned secure URL is modified to force download.
4. The modified link is encoded and passed to the QR code API.
5. The generated QR code is displayed, allowing the user to scan and download.

---


## Requirements

* Cloudinary account (for file uploads)
* Cloudinary **unsigned upload preset**
* Internet connection (to access Cloudinary and QR code API)

---

## Setup

1. Create a Cloudinary account: [https://cloudinary.com](https://cloudinary.com)
2. Set up an **unsigned upload preset** in your Cloudinary dashboard.
3. Replace the variables in the script:

   ```javascript
   let CLOUD_NAME = "your_cloud_name";
   let upload_preset = "your_upload_preset";
   ```
4. Open the HTML file in your browser and start uploading files.

---

## Security Warning

Because this code:

* Has **no backend authentication**
* Uses **unsigned uploads**
* Exposes your Cloudinary credentials in plain text

Anyone with access to the site can upload files to your Cloudinary account.
If you want public or production use:

* Implement a secure backend
* Use **signed uploads**
* Hide sensitive credentials on the server side

---

## License

This project is provided **as-is** for personal use only. No warranty or liability is assumed.
