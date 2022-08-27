import React from 'react'
import './content.css'

function Content() {
  return (
    <>
    <div className='container'>
    
    <div className="card mb-3">
    <div className="row content g-0">
    <div className="col-md-4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" className="img-fluid mx-auto d-block" alt="HTML" />
    </div>
    <div className="col-md-8 bg-danger">
      <div className="card-body">
        <h5 className="card-title">HTML</h5>
        <p className="card-text1">HTML atau Hypertext Markup Language adalah bahasa standar pemrogaman yang digunakan untuk membuat halaman website, yang ditampilkan di World Wide Web (www). Setiap halaman berisi serangkaian koneksi ke halaman lain yang disebut hyperlink. Setiap halaman web yang Anda lihat di Internet ditulis menggunakan satu versi kode HTML atau yang lain.</p>
        <p className="card-text2"><small className="text-light">25 Agustus 2022</small></p>
      </div>
    </div>
    </div>
    </div>

    <div className="card mb-3">
    <div className="row content g-0">
    <div className="col-md-4">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" className="img-fluid mx-auto d-block" alt="CSS" />
    </div>
    <div className="col-md-8 bg-primary">
      <div className="card-body">
        <h5 className="card-title">CSS</h5>
        <p className="card-text1">CSS adalah singkatan dari cascading style sheets, yaitu bahasa yang digunakan untuk menentukan tampilan dan format halaman website. Dengan CSS, Anda bisa mengatur jenis font, warna tulisan, dan latar belakang halaman. CSS digunakan bersama dengan bahasa markup, seperti HTML untuk membangun sebuah website yang menarik dan memiliki fungsi yang berjalan baik.</p>
        <p className="card-text2"><small className="text-light">26 Agustus 2022</small></p>
      </div>
    </div>
    </div>
    </div>

    <div className="card mb-3">
    <div className="row content g-0">
    <div className="col-md-4 content1">
      <img src="https://i2.wp.com/thebamboocode.com/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500" className="img-fluid mx-auto d-block" alt="CSS" />
    </div>
    <div className="col-md-8 content2 bg-warning">
      <div className="card-body">
        <h5 className="card-title">JavaScript</h5>
        <p className="card-text1">JavaScript adalah bahasa pemrograman  yang digunakan dalam pengembangan situs web agar lebih dinamis dan interaktif. Kalau sebelumnya kita hanya mengenal HTML dan CSS, sekarang kita jadi tahu bahwa JavaScript dapat meningkatkan fungsionalitas pada halaman web. Bahkan dengan JavaScript ini kamu bisa membuat aplikasi, tools , atau bahkan game di web.</p>
        <p className="card-text2"><small className="text-light">26 Agustus 2022</small></p>
      </div>
    </div>
    </div>
    </div>
    
    </div>
   
  </>
  )
}

export default Content;