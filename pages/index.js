import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Header title="Tools" /> */}

        <div style={{padding:"0 10%", textAlign: "center" }} >
          <h1>Tools</h1>
          <h3 style={{padding: "0 0 35px"}}>
            Links will give you full retail price. I&nbsp;will discount full retail price. <br/>If interested text <a href={"sms:4153006809"} style={{textDecoration: "none"}}>415-300-6809</a>
            </h3>
        <a href={"https://www.homedepot.com/p/Makita-18-Volt-5-0Ah-X2-LXT-Lithium-Ion-36V-Brushless-Cordless-10-in-Dual-Bevel-Sliding-Compound-Miter-Saw-with-Laser-Kit-XSL06PT/302255047"} target={"blank"}>
          <div style={{paddingBottom: "35px"}}>
              <img src={"https://images.thdstatic.com/productImages/0ef86d91-c4c3-40da-9afe-332072b5c6bd/svn/makita-miter-saws-xsl06pt-64_600.jpg"} style={{width: "100%", maxWidth: "300px"}}/>
            <p style={{textAlign: "center"}}>Makita 18-Volt 5.0Ah X2 LXT Lithium-Ion (36V) Brushless Cordless 10 in. Dual-Bevel Sliding Compound Miter Saw with Laser Kit</p>
          </div>
          </a>
          <a href={"https://www.homedepot.com/p/DEWALT-20-Volt-MAX-Cordless-Combo-Kit-7-Tool-with-ToughSystem-Case-1-20-Volt-4-0Ah-Battery-2-20-Volt-2-0Ah-Batteries-DCKTS781D2M1/312585400"} target={"blank"}>
          <div style={{paddingBottom: "35px"}}>
              <img src={"https://images.thdstatic.com/productImages/ce8a178f-e0bd-4733-8381-fcd8c8390513/svn/dewalt-power-tool-combo-kits-dckts781d2m1-64_600.jpg"} style={{width: "100%", maxWidth: "300px"}}/>
            <p style={{textAlign: "center"}}>Makit 18-Volt 5.0Ah X2 LXT Lithium-Ion (36V) Brushless Cordless 10 in. Dual-Bevel Sliding Compound Miter Saw with Laser Kit</p>
          </div>
          </a>
          <a href={"https://www.homedepot.com/p/DEWALT-20-Volt-MAX-Compact-Lithium-Ion-2-0-Ah-Battery-Pack-2-Pack-and-20-Volt-MAX-XR-Lithium-Ion-Battery-Pack-4-0-Ah-2-Pack-DCB324-4/310112065?cm_mmc=ecc-_-THD_ORDER_CONFIRMATION_BOSS_STH-_-V1_M1_CA-_-Product_URL&ecc_ord=WD96705359&em_id=75652e6f2d5bfcd8bf34d3f2627b524ae359b3438da9f0ec7ffd650a58b928b6"} target={"blank"}>
          <div style={{paddingBottom: "35px"}}>
              <img src={"https://images.thdstatic.com/productImages/aacc831e-3f9f-4f70-bac1-a3dae7c882ac/svn/dewalt-power-tool-batteries-dcb324-4-64_600.jpg"} style={{width: "100%", maxWidth: "300px"}}/>
            <p style={{textAlign: "center"}}>
            DEWALT 20-Volt MAX Compact Lithium-Ion 2.0 Ah Battery Pack (2-Pack) and 20-Volt MAX XR Lithium-Ion Battery Pack 4.0 Ah (2-Pack)
            </p>
          </div>
          </a>
          <a href={"https://www.homedepot.com/p/RIDGID-16-Gal-5-0-Peak-HP-NXT-Wet-Dry-Shop-Vacuum-with-Filter-Hose-and-Accessories-HD1640/316514940?cm_mmc=ecc-_-THD_ORDER_CONFIRMATION_BOSS_STH-_-V1_M1_CA-_-Product_URL&ecc_ord=W882487653&em_id=75652e6f2d5bfcd8bf34d3f2627b524ae359b3438da9f0ec7ffd650a58b928b6"} target={"blank"}>
            <div style={{paddingBottom: "35px"}}>
                <img src={"https://images.thdstatic.com/productImages/545c34a5-7d4f-41e0-a535-ee6cc75e9a11/svn/oranges-peaches-ridgid-wet-dry-vacuums-hd1640-64_600.jpg"} style={{width: "100%", maxWidth: "300px"}}/>
              <p style={{textAlign: "center"}}>
                RIDGID 16 Gal. 5.0-Peak HP NXT Wet/Dry Shop Vacuum with Filter, Hose and Accessories
              </p>
            </div>
          </a>


          </div>




        {/* <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p> */}
                  </main>
          </div>
  )
}
