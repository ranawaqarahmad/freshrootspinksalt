const cloudinaryBase = 'https://res.cloudinary.com/digdbqcct/image/upload/f_auto,q_auto';
const cloudinaryUrl = (path: string) => `${cloudinaryBase}/${path}`;

export const imageUrls = {
  banner1: cloudinaryUrl('v1769536579/banner_image_1_vuxzbe.jpg'),
  banner2: cloudinaryUrl('v1769536579/banner_image_2_h5waim.jpg'),
  banner3: cloudinaryUrl('v1769536580/banner_image_3_p0fjgl.jpg'),
  edibleSalt: cloudinaryUrl('v1769536581/edible_and_culinary_salt_ejjgev.jpg'),
  culinarySalt: cloudinaryUrl('v1769536581/culinary_and_edible_salt_fq8urn.jpg'),
  animalLick: cloudinaryUrl('v1769536579/animal_lick_salt_ndskd1.jpg'),
  tilesBricks: cloudinaryUrl('v1769536586/tiles_and_bricks_vqvez8.jpg'),
  spaWellness: cloudinaryUrl('v1769536584/spa_and_wellness_xalnvi.jpg'),
  decorCraft: cloudinaryUrl('v1769536580/decor_and_craft_g1akht.jpg'),
  accessories: cloudinaryUrl('v1769536578/accessories_ltxwjf.jpg'),
  rawIndustrial: cloudinaryUrl('v1769536584/raw_industrial_salt_zvcv7n.jpg'),
  edibleFine: cloudinaryUrl('v1769536583/edible-pink-salt-fine_alguld.jpg'),
  smallGrainSalt: cloudinaryUrl('v1769539995/2mm_grain_salt_gunep7.jpg'),
  granularSalt: cloudinaryUrl('v1769539996/5mm_granular_salt_jfdmpm.jpg'),
  rockSalt: cloudinaryUrl('v1769540000/10mm_rock_salt_duxwor.jpg'),
  lickSalt2KG: cloudinaryUrl('v1769539995/2kg_lick_salt_dyj35z.jpg'),
  lickSalt4KG: cloudinaryUrl('v1769539996/4kg_lick_salt_ln6hy6.jpg'),
  lickSalt6KG: cloudinaryUrl('v1769539997/6kg_lick_salt_n1uiwd.jpg'),
  hangingLickSalt: cloudinaryUrl('v1769540003/hanging_salt_mkixtt.jpg'),
  standardSaltBrick: cloudinaryUrl('v1769540004/841_salt_brick_wviadt.jpg'),
  smallerSaltBrick: cloudinaryUrl('v1769540001/641_salt_brick_ustmpx.jpg'),
  saltPanels: cloudinaryUrl('v1769540266/salt_panels_hvcobi.jpg'),
} as const;
