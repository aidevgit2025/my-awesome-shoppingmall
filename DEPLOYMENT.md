# 배포 가이드 - 둥둥둥 파션 웹사이트

이 프로젝트를 무료로 배포하는 방법을 안내합니다.

## 🚀 방법 1: Vercel (가장 추천)

Vercel은 Next.js를 만든 회사이고, 설정이 가장 간단합니다.

### 단계별 배포 방법:

1. **GitHub에 프로젝트 업로드**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Vercel 가입 및 배포**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인
   - "New Project" 클릭
   - GitHub 레포지토리 선택
   - 자동으로 설정 감지됨 (Next.js)
   - "Deploy" 클릭

3. **완료!**
   - 몇 분 후 `https://your-project.vercel.app` 형태의 URL 생성
   - GitHub에 푸시할 때마다 자동 배포

### Vercel 장점:
- ✅ 완전 무료 (개인 프로젝트)
- ✅ 자동 HTTPS
- ✅ 글로벌 CDN
- ✅ 무제한 대역폭
- ✅ 자동 배포 (GitHub 연동)
- ✅ 커스텀 도메인 지원

---

## 🌐 방법 2: Netlify

Netlify도 좋은 대안입니다.

### 배포 방법:

1. **GitHub에 코드 업로드** (Vercel과 동일)

2. **Netlify 배포**
   - https://www.netlify.com 접속
   - GitHub 계정으로 로그인
   - "Add new site" → "Import an existing project"
   - GitHub 레포지토리 선택
   - 빌드 설정:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - "Deploy site" 클릭

### Netlify 장점:
- ✅ 무료 티어 제공
- ✅ 자동 HTTPS
- ✅ 빠른 CDN
- ✅ 폼 처리 기능

---

## 📦 방법 3: GitHub Pages (정적 사이트)

정적 사이트로만 배포하려면:

1. **next.config.ts 수정 필요**
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **배포**
   - `npm run build` 실행
   - `out` 폴더 생성됨
   - GitHub Pages에 `out` 폴더 업로드

---

## ⚙️ 배포 전 체크리스트

- [ ] `.gitignore` 파일 확인
- [ ] 환경 변수가 있다면 Vercel/Netlify에 설정
- [ ] `package.json`의 빌드 스크립트 확인
- [ ] 모든 파일이 GitHub에 업로드되었는지 확인

---

## 🔧 환경 변수 설정 (필요한 경우)

Vercel/Netlify 대시보드에서:
- Settings → Environment Variables
- 필요한 변수 추가

---

## 📝 현재 프로젝트 배포 준비 상태

✅ Next.js 16.0.0 설정 완료
✅ TypeScript 설정 완료
✅ Tailwind CSS 설정 완료
✅ 빌드 스크립트 준비됨
✅ 이미지 최적화 설정 완료 (Unsplash)
✅ `.gitignore` 파일 생성됨

---

## 💡 추천 배포 플랫폼

1. **Vercel** - Next.js 프로젝트에 최적화
2. **Netlify** - 다른 옵션 필요시
3. **Railway** - 서버 사이드 기능 필요시

---

## 🆘 문제 해결

배포 중 문제가 발생하면:
- 빌드 로그 확인
- 로컬에서 `npm run build` 테스트
- 환경 변수 확인
- `next.config.ts` 설정 확인

