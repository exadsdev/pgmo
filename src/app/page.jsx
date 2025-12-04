 'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/CartContext';
import ContactForm from '@/components/ContactForm';
import Item from '@/components/Item';
import Reviews from '@/components/Reviews';

const brandName =
  process.env.NEXT_PUBLIC_BRAND_NAME || 'Your Brand';
const companyLegal =
  process.env.NEXT_PUBLIC_COMPANY_LEGAL ||
  'Your Company Legal Name';
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@example.com';
const contactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || '000-000-0000';
const companyAddress =
  process.env.NEXT_PUBLIC_COMPANY_ADDRESS ||
  '183 หมู่ที่ 1 ตำบลคำตากล้า อำเภอคำตากล้า จังหวัดสกลนคร 47250';

const products = [
  {
    id: 'pg-v9-1',
    name: 'สมาร์ทโฟน PG V9 รุ่นที่ 1 จอ 6.3 นิ้ว ROM 64GB',
    price: 1190,
    image: '/images/pg-v9-1.jpg',
    badge: 'ยอดนิยม'
  },
  {
    id: 'pg-v9-2',
    name: 'สมาร์ทโฟน PG V9 รุ่นที่ 2 รองรับ 2 ซิม 4G',
    price: 1190,
    image: '/images/pg-v9-2.jpg',
    badge: 'ขายดี'
  },
  {
    id: 'pg-v9-3',
    name: 'สมาร์ทโฟน PG V9 รุ่นที่ 3 แบตอึด เล่นโซเชียลลื่น',
    price: 1190,
    image: '/images/pg-v9-3.jpg',
    badge: 'สุดคุ้ม'
  },
  {
    id: 'pg-v9-4',
    name: 'สมาร์ทโฟน PG V9 รุ่นที่ 4 กล้องคมชัด เหมาะถ่ายรูป',
    price: 1190,
    image: '/images/pg-v9-4.jpg',
    badge: 'โปรโมชั่น'
  },
  {
    id: 'pg-v9-5',
    name: 'สมาร์ทโฟน PG V9 รุ่นที่ 5 ดีไซน์บางเบา พกพาสะดวก',
    price: 1190,
    image: '/images/pg-v9-5.jpg'
  },
  {
    id: 'pg3',
    name: 'สมาร์ทโฟน PG V9 เน้นความคุ้ม RAM/ROM เพียงพอ',
    price: 1190,
    image: '/images/pg3.jpg'
  },
  {
    id: 'pg4',
    name: 'สมาร์ทโฟน PG V9 มือถือจอใหญ่ ดูคอนเทนต์เต็มตา',
    price: 1190,
    image: '/images/pg4.jpg'
  },
  {
    id: 'pg5',
    name: 'สมาร์ทโฟน PG V9 รองรับแอปยอดนิยมครบ เล่นไลน์เฟซสบาย',
    price: 1190,
    image: '/images/pg5.jpg'
  }
  ,
  {
    id: 'pg-r1',
    name: 'สมาร์ทโฟน PG R1 s ใช้ได้ 2 ซิม4G คุ้มด้วยหน้าจอ 6.3นิ้ว Ram3 Rom32',
    price: 2590,
    image: '/images/pg-r1.jpg'
  }
  ,
  {
    id: 'pg-r1-pro',
    name: 'โทรศัพท์มือถือ PG รุ่น R1 PRO สมาร์ทโฟน 4G หน้าจอกว้าง 6 นิ้ว ใช้ได้ 2 ซิม รองรับ 3G/4G (สีทอง)',
    price: 2990,
    image: '/images/pr-r2.jpg'
  }
  ,
  {
    id: 'pg-r2',
    name: 'โทรศัพท์ PG DROID R2 PLUS แบตเตอรี่ 3,400 Mah แรม4GB รอม 64GB ',
    price: 1890,
    image: '/images/pg-r2.jpg'
  }
  ,
  




];

export default function HomePage() {
  const { addToCart, cartCount } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );




  return (
    <>
    < Item />
   
      <section id="intro" className="py-4 py-md-5 bg-light">
        <div className="container-md">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold mb-3">
                {brandName} | ร้านขายโทรศัพท์มือถือออนไลน์
              </h1>
              <p className="lead mb-3">
               
            <strong>     <strong>PG mobile เว็บตรง100% </strong> <br />        
                   <strong>PGเว็บตรงช่วงโปรโมชั่น</strong> <br /> <strong>PGmobile ลิขสิทธิ์แท้100%</strong>

</strong> <br />

                มือถือแท้ ประกันศูนย์ไทย ราคาพิเศษ ผ่อน 0%* จัดส่งทั่วประเทศ โดย{' '}
                {companyLegal}
              </p>
              <ul className="mb-4">

                <li>สินค้าของแท้ 100% มีใบรับประกันจากผู้ผลิต</li>
                <li>ออกใบกำกับภาษีได้ในนาม {companyLegal}</li>
                <li>มีทีมซัพพอร์ตให้คำปรึกษาก่อนและหลังการขาย</li>
                <li>จัดส่งด่วนทั่วประเทศ มีเลข Tracking ตรวจสอบได้</li>
              </ul>
              <a
                href="#products"
                className="btn btn-primary btn-medium me-2"
              >
                เลือกดูสินค้า
              </a>
              <a
                href="/contact"
                className="btn btn-outline-secondary btn-medium"
              >
                ติดต่อร้านค้า
              </a>
            </div>
            <div className="col-lg-6 text-center">
              <Image
                src="/images/og-main.jpg"
                className="img-fluid rounded"
                alt="หน้าร้านออนไลน์"
                width={720}
                height={420}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS + SEARCH */}
      <section id="products" className="py-4 py-md-5">
        <div className="container-md">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 gap-3">
            <div>
              <h2 className="h3 mb-1">สินค้าแนะนำ</h2>
              <span className="text-muted small">
                มือถือ {brandName} ทุกรุ่นพร้อมประกันศูนย์ไทย
              </span>
            </div>
            <div style={{ minWidth: 260 }}>
              <label className="form-label small mb-1">ค้นหาสินค้า</label>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder="ค้นหาชื่อรุ่น หรือคำสำคัญ เช่น V9, Series 3"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Link
                  href="/cart"
                  className="btn btn-outline-dark d-flex align-items-center"
                  aria-label="ไปที่ตะกร้าสินค้า"
                >
                  <span style={{ fontSize: 18, lineHeight: 1 }}>🛒</span>
                  <span className="d-none d-sm-inline ms-1">ตะกร้า</span>
                  {cartCount > 0 && (
                    <span className="badge bg-danger ms-2">{cartCount}</span>
                  )}
                </Link>
              </div>
            </div>
          </div>

          <div className="row g-4 product-content">
            {filteredProducts.length === 0 ? (
              <div className="col-12">
                <p className="text-muted">
                  ไม่พบสินค้าที่ตรงกับคำว่า{' '}
                  <strong>{searchTerm}</strong> กรุณาลองคำค้นอื่น
                  หรือดูสินค้าทั้งหมดบนหน้านี้
                </p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="col-6 col-md-4 col-lg-3"
                >
                  <div className="card product-card h-100 border-0 shadow-sm">
                    <div className="position-relative">
                      <Image
                        src={product.image}
                        className="card-img-top product-image"
                        alt={product.name}
                        width={360}
                        height={280}
                      />
                      {product.badge && (
                        <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                          {product.badge}
                        </span>
                      )}

                      <div className="position-absolute bottom-0 end-0 m-2">
                        <button
                          type="button"
                          className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: 36,
                            height: 36,
                            fontSize: 18,
                            padding: 0
                          }}
                          onClick={() => handleAddToCart(product)}
                          aria-label="เพิ่มลงตะกร้า"
                        >
                          🛒
                        </button>
                      </div>
                    </div>

                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title fs-6 fw-normal mb-1">
                        {product.name}
                      </h3>
                      <div className="mt-auto d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-danger">
                          ฿{product.price.toLocaleString('th-TH')}
                        </span>
                        <button
                          type="button"
                          className="btn btn-sm btn-black hvr-sweep-to-right d-flex align-items-center"
                          onClick={() => handleAddToCart(product)}
                        >
                          <span
                            style={{
                              fontSize: 16,
                              marginRight: 6,
                              lineHeight: 1
                            }}
                          >
                            🛒
                          </span>
                          เพิ่มลงตะกร้า
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-4 py-md-5 bg-gray">
        <div className="container-md">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h3 className="fs-4 mb-3">การรับประกันสินค้า</h3>
              <p>
                สินค้าทุกชิ้นเป็นของแท้ ประกันศูนย์ไทยอย่างน้อย 1 ปี
                สามารถติดต่อศูนย์บริการใกล้บ้าน หรือให้ {brandName}{' '}
                ช่วยประสานงานให้ได้
              </p>
            </div>
            <div className="col-lg-4 mb-4">
              <h3 className="fs-4 mb-3">การจัดส่งและความปลอดภัย</h3>
              <p>
                จัดส่งสินค้าด้วยขนส่งเอกชนที่มีเลข Tracking ตรวจสอบได้ทุกขั้นตอน
                มีการห่อกันกระแทกอย่างดี และมีตัวเลือกเก็บเงินปลายทางในบางพื้นที่
              </p>
            </div>
            <div className="col-lg-4 mb-4">
              <h3 className="fs-4 mb-3">การชำระเงิน</h3>
              <p>
                รองรับการชำระเงินผ่านบัตรเครดิต/เดบิต โอนผ่านธนาคาร
                และวอลเล็ตยอดนิยม ข้อมูลการชำระเงินของลูกค้าจะถูกเก็บรักษาอย่างปลอดภัย
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-4 py-md-5">
        <div className="container-md">
          <h2 className="h3 mb-3">คำถามที่พบบ่อย (FAQ)</h2>
          <p className="text-muted mb-4">
            รวมคำถามยอดนิยมเกี่ยวกับการสั่งซื้อ การชำระเงิน
            การจัดส่ง และการรับประกันสินค้า เพื่อให้คุณตัดสินใจได้อย่างมั่นใจ
          </p>

          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-heading-1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapse-1"
                  aria-expanded="true"
                  aria-controls="faq-collapse-1"
                >
                  สินค้าเป็นของแท้หรือไม่? มีประกันศูนย์หรือเปล่า
                </button>
              </h2>
              <div
                id="faq-collapse-1"
                className="accordion-collapse collapse show"
                aria-labelledby="faq-heading-1"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body small">
                  สินค้าทุกชิ้นที่จำหน่ายบนเว็บไซต์ {brandName}{' '}
                  เป็นสินค้าของแท้จากผู้จัดจำหน่ายที่ถูกต้อง
                  พร้อมการรับประกันศูนย์ไทยตามเงื่อนไขของผู้ผลิต
                  ไม่มีการจำหน่ายเครื่องละเมิดลิขสิทธิ์หรือเครื่องหิ้วที่ผิดกฎหมาย
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-heading-2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapse-2"
                  aria-expanded="false"
                  aria-controls="faq-collapse-2"
                >
                  ใช้เวลาจัดส่งสินค้านานเท่าไร และมีค่าจัดส่งหรือไม่
                </button>
              </h2>
              <div
                id="faq-collapse-2"
                className="accordion-collapse collapse"
                aria-labelledby="faq-heading-2"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body small">
                  โดยทั่วไปใช้เวลาจัดส่งประมาณ 1–3 วันทำการในเขตตัวเมือง
                  และ 2–5 วันทำการในพื้นที่ต่างจังหวัด ทั้งนี้ขึ้นอยู่กับบริษัทขนส่ง
                  และพื้นที่ปลายทาง ปัจจุบันเรามีโปรโมชั่น{' '}
                  <strong>จัดส่งฟรีแบบเก็บเงินปลายทาง</strong>{' '}
                  ภายในประเทศไทยสำหรับคำสั่งซื้อผ่านหน้าเว็บไซต์นี้
                  หากมีการเปลี่ยนแปลงจะแจ้งให้ทราบอย่างชัดเจนบนหน้าเว็บไซต์
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-heading-3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapse-3"
                  aria-expanded="false"
                  aria-controls="faq-collapse-3"
                >
                  สามารถชำระเงินแบบใดได้บ้าง มีเก็บเงินปลายทางหรือไม่
                </button>
              </h2>
              <div
                id="faq-collapse-3"
                className="accordion-collapse collapse"
                aria-labelledby="faq-heading-3"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body small">
                  ปัจจุบันเรารองรับการชำระเงินแบบเก็บเงินปลายทาง (Cash
                  on Delivery) ผ่านบริษัทขนส่งที่ร่วมให้บริการ
                  รวมถึงรองรับการชำระเงินออนไลน์ในบางช่องทาง
                  โดยรายละเอียดอาจปรับเปลี่ยนตามช่วงเวลา
                  กรุณาตรวจสอบที่หน้าชำระเงินก่อนยืนยันคำสั่งซื้อทุกครั้ง
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-heading-4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapse-4"
                  aria-expanded="false"
                  aria-controls="faq-collapse-4"
                >
                  หากได้รับสินค้าเสียหายหรือมีปัญหา ต้องทำอย่างไร
                </button>
              </h2>
              <div
                id="faq-collapse-4"
                className="accordion-collapse collapse"
                aria-labelledby="faq-heading-4"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body small">
                  หากคุณได้รับสินค้าเสียหาย หรือมีปัญหาในการใช้งานตั้งแต่แรก
                  กรุณาถ่ายภาพ/วิดีโอประกอบ และติดต่อทีมงานทันทีผ่านเบอร์{' '}
                  {contactPhone} หรืออีเมล{' '}
                  <a href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>{' '}
                  ภายในระยะเวลาที่ระบุในนโยบายการรับประกัน/คืนสินค้า
                  เราจะช่วยประสานงานกับศูนย์บริการหรือดำเนินการตามนโยบายให้เร็วที่สุด
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq-heading-5">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapse-5"
                  aria-expanded="false"
                  aria-controls="faq-collapse-5"
                >
                  เว็บไซต์นี้ปลอดภัยไหม ข้อมูลส่วนตัวและข้อมูลการชำระเงินถูกเก็บรักษาอย่างไร
                </button>
              </h2>
              <div
                id="faq-collapse-5"
                className="accordion-collapse collapse"
                aria-labelledby="faq-heading-5"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body small">
                  เว็บไซต์ของเราให้ความสำคัญกับความปลอดภัยของข้อมูลลูกค้า
                  ใช้มาตรการด้านความปลอดภัยตามสมควร
                  และไม่เผยแพร่ข้อมูลส่วนบุคคลให้บุคคลภายนอก
                  โดยไม่จำเป็น คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่{' '}
                  <a href="/privacy">นโยบายความเป็นส่วนตัว</a>{' '}
                  และ{' '}
                  <a href="/security">นโยบายความปลอดภัยข้อมูล</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY SUMMARY */}
      <section id="policy" className="py-4 py-md-5">
        <div className="container-md">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h3 className="fs-4 mb-3">นโยบายความเป็นส่วนตัว</h3>
              <p>
                {brandName} ให้ความสำคัญกับข้อมูลส่วนบุคคลของลูกค้าเป็นอย่างมาก
                ข้อมูลที่เราเก็บ ได้แก่ ชื่อ-นามสกุล เบอร์โทร อีเมล
                และที่อยู่สำหรับจัดส่งสินค้า ใช้เพื่อการติดต่อกลับ
                ยืนยันคำสั่งซื้อ ออกเอกสาร และจัดส่งสินค้าเท่านั้น
              </p>
              <a
                href="/privacy"
                className="btn btn-sm btn-outline-secondary"
              >
                อ่านนโยบายฉบับเต็ม
              </a>
            </div>
            <div className="col-lg-6 mb-4">
              <h3 className="fs-4 mb-3">
                เงื่อนไขการใช้งาน &amp; การสั่งซื้อ
              </h3>
              <p>
                การใช้งานเว็บไซต์และการสั่งซื้อผ่าน {brandName}{' '}
                ถือว่าท่านยอมรับข้อกำหนดและเงื่อนไขการใช้งาน
                ราคาและโปรโมชั่นอาจมีการเปลี่ยนแปลงได้โดยไม่ต้องแจ้งล่วงหน้า
              </p>
              <a
                href="/terms"
                className="btn btn-sm btn-outline-secondary"
              >
                อ่านเงื่อนไขฉบับเต็ม
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-5 bg-light">
        <div className="container-md">
          <h2 className="text-center mb-4">ติดต่อเรา</h2>
          <p className="text-center mb-5">
            หากมีข้อสงสัยหรือต้องการติดต่อบริการหลังการขาย
            สามารถส่งข้อความถึงเราได้ทันที หรือไปที่หน้า{' '}
            <a href="/contact">ติดต่อเรา</a> โดยตรง
          </p>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h4 className="mb-3">ส่งข้อความหาเรา</h4>
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <h4 className="mb-3">ข้อมูลร้านค้า</h4>
                  <p className="mb-1 fw-bold">{companyLegal}</p>
                  <p className="mb-1">{companyAddress}</p>
                  <p className="mb-1">โทร: {contactPhone}</p>
                  <p className="mb-3">
                    อีเมล:{' '}
                    <a href={`mailto:${contactEmail}`}>
                      {contactEmail}
                    </a>
                  </p>
                  <p className="text-muted mb-0">
                    เวลาทำการ: จันทร์ – อาทิตย์ 10:00 – 20:00 น.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reviews columns={6} limit={6} heading="รีวิวจากลูกค้า" />
    </>
  );
}
