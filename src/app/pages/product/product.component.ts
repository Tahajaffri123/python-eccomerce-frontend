import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAR346AwZW5RtFGbWcWsq7F-ZQFF0fnQDbtB_vZKQeJFiggds9q9yu36eve4eIUDhpyTRjT1dKRLqSTNZlRqj91YUT-dEj_aOE02otWzf4aIsyIGKUOMf3MqXinmx5TNWGn04Xu86-M-mNahHV_lVbeOB6Rf__ez5fdDl5puB54vJkcnPF5Q0p8AFSlR4NvftlqNjfWFhiyXDxaGa49k8xJfgZHBPLg9a6BrX9wEw3Mw5TgbozMWxwtEjswzH8Dj919hsECKX3OxOA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAmEh1khYL8uyV3rI2HfxmZCoWqasHrmN_GeUMidt0hvw_i2aK809AOQlibBoFtoeJoPx9fXyGJOjkmxs_z68u_duMv1pN0wXgGlCl5lDwl_sY5sQ3ZQ-yURgxpiKhztWRwyb6ZKa5bU4fushJru52E_ohy7Gs5T0VPJO8zfxI2wBCTm_s8A2agUPhtGEAHzsZPgns4ig96GFEETBR1e8pfBeRQsH2hzZS1XtnCP7afLmwvBMAC9u_tj4JoBrq6TNKrD2DuTINzHsQ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ14iKktAhY0dzXSZKI2350hqqNqnlpFouuIWCMubyHF1YkeTlKyTWuWVjlM6EL2FQUQsgXGXA46YsT3nPUCwyFNgd54qD2U2kKh6afTYJpehTKqw-OgyZ5cMF70z59A_EG2IrROQ-Zdxf0ILu0Ni8oNic8z5EXlHJ266eEx_-HgIQFcoI5aAzv4w6DiF8MbSHwWhnTRr_ON9BSyn6IeEaWl8Lv8wGlS2VN1pR0_zr7nVg0iWYUKEyo9zmD-thOyU45GgUehLuOAk',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBLStyp3jnMlHt3Q7hwjTBmnhUF-9fHCxcN9zVvMesV5j2kaiPrFNmLmLez9PNEHQL4mTrJ6LR3rLh_6axEQIwzxeQmFvMtUtiTttz-w6K-Ga-bi7JUyolRAeTTcTesZa8i02btlXS7V4tUkb7Ci0iNoliOxJ9otUvfVSHWc6zzB0uMMtaO7FuR8V-6_oXv_OBJMFfuniICLCW0VQJE2ry7gvdtgokSvseeQ1qTPFl8JqgbVAGBKIl3uiM-B2J-DHJFXA4E7theQIw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAQENfXHrVUOwQWZ9JW4Lkknsn6ntRILW_Zr_4NAnEg3zyoeaGALayFsbBpcnvoC4_b_mlnp7FfPGzv7O--nCewcKqexDomNbEbJK-1IbodHbnfHCB3p9ownGMj8xHs7JUJw2od728-bXosU69oQV5cbn3gr2jaah5Rn1_j_5pe0EiUuEKmH7dHTa82OVS2iqnV2AIe6tOMySyw9Y-fVRMkzfjvbjy4LJITidY8H1OOeYTP5U5OJQ68R8-4pKpldVw-uPHgtS4MaAo'
  ];

  activeImage = signal(this.images[0]);

  relatedItems = [
    {
      name: 'CARGO BOOT v.02',
      category: 'FOOTWEAR',
      price: '$620',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0I6CgU3ffcwXPgjni6y7FNyBcyxmokck6D97kL_3bg83kicNGD1F3OOnUaxrNx7nlaf646OtYzcm_gA3d2cmea-yjvltVJmHq-i3jmEQUEoz3Ju2XooUeJDVS_d1zKjYKW6BdIkJUIRXHk1CgeB4Igbmt2b7MmuQqU6hi2GXVmQfHTq0PR3kvHLgSnLpiB26XHxtaBwEtYvnorJIcuWIgu5Raxp3_G4PuhQt79R0P8QBksrc6GknIy_3k1zrYeFT_zCM7tfr_NPY'
    },
    {
      name: 'SHIFT HOODIE',
      category: 'APPAREL',
      price: '$210',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyNarnoS_jHpSz1D2XFhHgaKMvo1ni4VRaqLCsqKhgLyVJ9DiZcKj0kJllqVZQfAL6M8DjV34crN7vdhA174GLx5OV4xGhO71Vu6EzKHquwSXCdb2_EszrB0ZcNiElpV9l8OR-vbgePZKD0aZR3YP0Rr8QtjnwkrvVcIWsVQuNE97xFsn2Zp3vQS93hw0W5IiuRSEjMg3p2KC5SevLzAp6naV6hEp9lR2-LmGx0tfGrgWMAUJT4EXpYX_zrpFsSvbm9h_QW-s3A4s'
    },
    {
      name: 'CYBER OPTICS S1',
      category: 'ACCESSORIES',
      price: '$340',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVZLnnm7J69isT8-e2sp8yHsgv8zq8M6sUnxuBLXIt8vG_mSfcfypvZryhkg4n7b66lo7RC1I085EOvwNFj7dEz_9TdF2Lf2ejMZ6JXcpWLDXRHIZruXCvmo0U44Pcf5oplNs-VRIhiDNrGy7P4PXB2yA4f5dZkCy_7ml4QM2vqL7j9izkP1IqN2PXk6SV4_eGLG5Abn3J-LZU2BFqdO7AjcSYxmAl-7_6ZnOg_NcDONIrgYVbciuG7OSn0dko4j9HYYBbufW4sDc'
    },
    {
      name: 'OBSIDIAN BOMBER',
      category: 'OUTERWEAR',
      price: '$1,250',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtnPNmI4oJ1gMBe1KUI5hHNIH4htFtrTvfTjLnTznHeJY8aTJuPJXzKkuGARdg1aMSRGobtcNV2yZlRAkZoehPXgPneYFTIdLnLKN3LJ_2BoSPnJKPN0ygofSMW1Wk2NydBe06krhsPvHSvXGGp71yrCUY9LYss6aXo4_V3se0BS5DwrHNdYfyHS4ZS659-tE1Ghh0P6G2gNzVe_xuH10aKMdgY8CexrErIntSrADWfEcKZlk8-G0S2VqFIlShzcVMqShJWTA5HCo'
    }
  ];
}
