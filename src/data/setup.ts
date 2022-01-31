export interface Component {
  type: string
  name: string
  href: string
}

export const ComponentData: Component[] = [
  {
    type: 'Case',
    name: 'Cooler Master HAF X',
    href: 'https://www.amazon.com/Cooler-Master-HAF-Computer-RC-942-KKN1/dp/B003S68Q0Y',
  },
  {
    type: 'Motherboard',
    name: 'ASRock H570M Pro4 Micro ATX LGA1200 Motherboard',
    href: 'https://www.amazon.com/ASRock-Compatible-Generation-MicroATX-Motherboard/dp/B08X1TDPV8',
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
    name: '*Intel Core i5-10400 2.9 GHz 6-Core Processor',
    href: 'https://www.amazon.com/Intel-i5-10400-Desktop-Processor-LGA1200/dp/B086MN38Q2',
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
    name: 'Western Digital Blue SN550 500 GB M.2-2280 NVME Solid State Drive',
    href: 'https://www.amazon.com/Blue-SN550-500GB-NVMe-Internal/dp/B07YFF3JCN',
  },
]
