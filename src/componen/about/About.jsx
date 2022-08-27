import React from 'react'
import Navbar from '../navbar/Navbar'
import './about.css'
import syakban from '../../assets/image2.png'

function About() {
  return (
    <>
    <Navbar />

    <div className='container'>
      <div className='col-12'>
      <div className='row'>

        <div className='col-12 col-sm-6 col-md-6 col-lg-6 py-3 bg-secondary'>
        <div className="text-center">
          <img src={syakban} className='about-img' alt='syakban' />
        </div>
        </div>

        <div className='col-12 col-sm-6 col-md-6 col-lg-6 text bg-primary'>
        <h3>About Me</h3>
          <p>Hallo Salam kenal, Nama saya Ahmad Syakban. Saya berasal dari Desa Lenangguar Kecamatan Lenangguar Kabupaten Sumbawa Provinsi Nusa Tenggara Barat. Saat ini saya tengah mengenyam pendidikan di salah satu kampus di pulau Sumbawa, yaitu Universitas Teknologi
             Sumbawa Fakultas Rekayasa Sistem Prodi Teknik Informatika.</p>
        </div>

        <div className='col-12 col-sm-6 col-md-6 col-lg-6 text bg-danger'>
        <h3>Alamat :</h3>
          <p>Dusun Lenangguar B RT 011 / RW 004 Desa Lenangguar Kecamatan Lenangguar Kabupaten Sumbawa Provinsi Nusa Tenggara Barat.</p>
        </div>

        <div className='col-12 col-sm-6 col-md-6 col-lg-6 text bg-success'>
        <h4>Riwayat Pendidikan :</h4>
        <li>SDN 1 Lenangguar 2005-2011</li>
        <li>SMPN 1 Lenangguar 2011-2014</li>
        <li>SMKN 1 Lenangguar 2014-2017</li>
        <li>Universitas Teknologi Sumbawa</li>
        <h4>Hobi :</h4>
        <li>Olahraga</li>
        <li>Traveling</li>
        </div>

      </div>
      </div>
    </div>  
    </>
  )
}

export default About;