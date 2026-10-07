# E-Commerce

## About

E-Commerce is a React and Vite storefront for browsing products, managing a shopping cart, creating an account, and placing and reviewing orders. Product, customer, and order data are connected to API services.

Bu proje React ve Vite ile geliştirilmiş bir e-ticaret arayüzüdür. Ürün ve kategorileri keşfetme, sepeti yönetme, kullanıcı hesabı oluşturma ve sipariş verme/takip etme akışlarını içerir.

## Gereksinimler

- Node.js (Vite 8 ile uyumlu güncel bir sürüm)
- npm
- Uygulamanın bağlanacağı API servislerinin adresleri

## Kurulum

1. Depoyu bilgisayarınıza alın ve proje klasörüne geçin:

   ```bash
   git clone <depo-adresi>
   cd e-commerce
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. Proje kökünde `.env` dosyası oluşturup API adreslerini tanımlayın:

   ```dotenv
   VITE_API_URL=https://api-adresiniz
   VITE_API2_URL=https://ikinci-api-adresiniz
   ```

   `VITE_API_URL` ve `VITE_API2_URL`, uygulamadaki iki Axios istemcisinin temel adresleridir. Projenizin API yapılandırmasına göre değerleri girin. Vite, ortam değişkenlerini derleme sırasında istemciye eklediğinden bu değişkenlere gizli anahtarlar koymayın.

4. Geliştirme sunucusunu başlatın:

   ```bash
   npm run dev
   ```

   Vite'ın terminalde gösterdiği yerel adresi tarayıcıda açın.

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Yerel geliştirme sunucusunu başlatır. |
| `npm run build` | Üretim dosyalarını `dist/` klasörüne oluşturur. |
| `npm run preview` | Üretim derlemesini yerel olarak sunar. Önce `npm run build` çalıştırın. |
| `npm run lint` | ESLint ile kaynak dosyalarını denetler. |

## Özellikler

- Ana sayfa, mağaza, kategori ve ürün detay sayfaları
- Sepete ürün ekleme ve sepet içeriğini tarayıcıda saklama
- Üye olma, giriş yapma ve kullanıcı oturumunu doğrulama
- Giriş gerektiren sipariş oluşturma, sipariş geçmişi ve sipariş sonucu sayfaları
- Hakkımızda, ekip ve iletişim sayfaları
- Redux ile uygulama durumu yönetimi ve API istekleri

## Sayfalar

| Adres | İçerik |
| --- | --- |
| `/` | Ana sayfa |
| `/shop` | Mağaza |
| `/shop/:gender/:categoryName/:categoryId` | Kategori ürünleri |
| `/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId` | Ürün detayı |
| `/cart` | Alışveriş sepeti |
| `/signup`, `/login` | Üyelik ve giriş |
| `/orders` | Önceki siparişler (giriş gerekir) |
| `/create-order` | Sipariş oluşturma (giriş gerekir) |
| `/order-success` | Sipariş onayı (giriş gerekir) |
| `/about`, `/team`, `/contact` | Bilgilendirme sayfaları |

## Teknolojiler

- React 18 ve Vite
- React Router 5
- Redux, React Redux ve Redux Thunk
- Axios
- Tailwind CSS 4 ve özel CSS
- React Toastify, React Icons ve Swiper

## Proje yapısı

```text
src/
├── components/  # Yeniden kullanılabilir arayüz bileşenleri
├── hooks/       # Özel React hook'ları
├── layout/      # Sayfa başlığı, altbilgi ve ortak düzen
├── pages/       # Uygulama sayfaları
├── services/    # API istemcileri
└── store/       # Redux store, action'lar ve reducer'lar
public/          # Statik görseller
```

## Dağıtım

Proje Vercel yapılandırması (`vercel.json`) içerir. Vercel projesinde `VITE_API_URL` ve `VITE_API2_URL` ortam değişkenlerini tanımlayın ve dağıtım sırasında üretim derlemesi için `npm run build`, çıktı klasörü olarak `dist` kullanın.
