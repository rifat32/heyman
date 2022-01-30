export interface Component {
  type: string
  name: string
  href: string
}

export const ComponentData: Component[] = [
  {
    type: 'Case',
    name: 'Cooler Master HAF X',
    href: 'https://www.nzxt.com/products/h510-elite-matte-white',
  },
  {
    type: 'Motherboard',
    name: 'ASRock H570M Pro4 Micro ATX LGA1200 Motherboard',
    href: 'https://www.msi.com/Motherboard/MEG-Z490-UNIFY',
  },
  // {
  //   type: 'PSU',
  //   name: 'Corsair RMx Series™ RM850x',
  //   href: 'https://www.corsair.com/uk/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/RMx-Series/p/CP-9020180-UK',
  // },
  {
    type: 'GPU',
    name: 'NVIDIA Geforce RTX 1060',
    href: 'https://www.nvidia.com/en-gb/geforce/graphics-cards/30-series/rtx-3080/',
  },
  {
    type: 'CPU',
    name: '*Intel Core i5-10400 2.9 GHz 6-Core Processor',
    href: 'https://ark.intel.com/content/www/us/en/ark/products/199332/intel-core-i9-10900k-processor-20m-cache-up-to-5-30-ghz.html',
  },
  // {
  //   type: 'CPU Cooler',
  //   name: 'NZXT Kraken Z63',
  //   href: 'https://www.nzxt.com/products/kraken-z63',
  // },
  {
    type: 'Memory',
    name: 'Silicon Power 16 GB (2 x 8 GB) DDR4-3200 CL16 Memory',
    href: 'https://www.corsair.com/uk/en/Categories/Products/Memory/Vengeance-PRO-RGB-Black/p/CMW32GX4M2D3600C18',
  },
  {
    type: 'Storage',
    name: 'Western Digital Blue SN550 500 GB M.2-2280 NVME Solid State Drive',
    href: 'https://www.samsung.com/uk/memory-storage/nvme-ssd/970-evo-plus-nvme-m-2-ssd-1tb-mz-v7s1t0bw/',
  },
]
