import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const AboutUsPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header activeHeading={4} />
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background:
            'linear-gradient(rgba(2, 40, 5, 0.8), rgba(2, 5, 52, 0.8)), url(https://www.teamgroupinc.com/en/upload/banner_pr_list/340a5bf3c93b2297d549360e38b09df9.jpg)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            maxWidth: '600px',
            width: '90%',
            background: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '10px',
          }}
        >
          <h1 style={{ fontSize: '50px', marginBottom: '20px' }}>
            Nešto više o nama
          </h1>
          <div>
            <p style={{ fontSize: '20px', margin: '30px 40px' }}>
              <span style={{ color: 'red', fontSize: '24px' }}>Mobile </span>
              <span style={{ color: 'rgb(7, 113, 163)', fontSize: '24px' }}>
                SHOP
              </span>{' '}
              je vodeći prodavac mobilnih telefona i uređaja. Sa više od 10
              godina iskustva, posvećeni smo pružanju najnovijih i
              najkvalitetnijih proizvoda našim kupcima koja postoje na tržištu.
            </p>
            <p style={{ fontSize: '20px', margin: '30px 40px' }}>
              Naš tim se brine o tome da korisnici dobiju najbolje moguće
              iskustvo kupovine. U našoj ponudi možete pronaći širok izbor
              mobilnih telefona, tableta, laptopova, dodatne opreme i još mnogo
              toga. Svi naši proizvodi su pažljivo odabrani kako bismo
              zadovoljili želje i potrebe naših lojalnih kupaca.
            </p>
            <p style={{ fontSize: '20px', margin: '30px 40px' }}>
              Pružamo sigurnu i pouzdanu online kupovinu, brzu dostavu i
              vrhunsku korisničku podršku. Naš cilj je da postanemo vaša prva
              destinacija za sve što se tiče mobilnih telefona i elektronike. Uz
              nas ćete pronaći sve što vam je potrebno da bi zadovoljili vaše
              potrebe.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
