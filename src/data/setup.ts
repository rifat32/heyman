export interface Component {
  type: string
  name: string
  href: string
}

export const ComponentData: Component[] = [
  {
    type: 'Case',
    name: 'Cooler Master RC-K550-KWN1',
    href: 'https://www.amazon.com/Cooler-Master-RC-K550-KWN1-Midnight-Interior/dp/B00M7SCAU6/ref=cm_cr_arp_d_product_top?ie=UTF8',
  },
  {
    type: 'Motherboard',
    name: 'MSI H110M PRO-VH Desktop Motherboard',
    href: 'https://www.amazon.com/MSI-Motherboard-H110M-PRO-VH-LGA1151/dp/B01649F7VW',
  },
  // {
  //   type: 'PSU',
  //   name: 'Corsair RMx Series™ RM850x',
  //   href: 'https://www.corsair.com/uk/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/RMx-Series/p/CP-9020180-UK',
  // },
  {
    type: 'GPU',
    name: 'NVIDIA Geforce GTX 1060',
    href: 'https://www.amazon.com/MSI-GAMING-GTX-1060-6G/dp/B01IEKYD5U',
  },
  {
    type: 'CPU',
    name: 'Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz 2.71 GHz',
    href: 'https://www.amazon.com/dp/B010T6CG7E?tag=userbenchmark-20&linkCode=ogi&th=1&psc=1',
  },
  // {
  //   type: 'CPU Cooler',
  //   name: 'NZXT Kraken Z63',
  //   href: 'https://www.nzxt.com/products/kraken-z63',
  // },
  {
    type: 'Memory',
    name: 'Silicon Power 16 GB (2 x 8 GB) DDR4-3200 CL16 Memory',
    href: 'https://www.amazon.com/Silicon-Power-Turbine-3200MHz-288-pin/dp/B07NKYM62D',
  },
  {
    type: 'Storage',
    name: 'ADATA Ultimate SU630 Disque SSD 2.5" 240 Go SATA',
    href: 'https://www.amazon.fr/dp/B07KQXKK12/ref=cm_sw_em_r_mt_dp_49KDY27QJDA22YB4FH0Q',
  },
]
