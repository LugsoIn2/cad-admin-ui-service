# CAD Admin UI Service
This repository includes the admin service frontend written in Vue.JS.
dow` from the command palette.

## Env variables
Crete an .env file in the root directory of this repository. 
```
VITE_API_ENDPOINT=http://localhost:8000/api
```

## Local development

```sh
npm run dev
```

## Github Actions
Please don't forget increase the version number.
```sh
npm version patch -m "v%s"
git push origin
```
Only then the github release action are successfull.

## Terraform
One Terraform Repository for all services:
[Terraform Repo](https://github.com/LugsoIn2/cad-terraform-all.git)

 