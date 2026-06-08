const cloudinaryBase = 'https://res.cloudinary.com/digdbqcct/image/upload/q_auto/f_auto';
const cloudinaryUrl = (path: string) => `${cloudinaryBase}/${path}`;
const cloudinarySizedUrl = (path: string, width: number) =>
  `https://res.cloudinary.com/digdbqcct/image/upload/q_auto/f_auto/c_limit,w_${width}/${path}`;
const responsiveWidths = [320, 480, 640, 800, 1024, 1280, 1600] as const;

export const cloudinaryResponsiveUrl = (src: string, width: number) => {
  if (!src.includes('res.cloudinary.com')) {
    return src;
  }

  return src.replace(
    /\/upload\/(?:[^/]+\/)*(?=v\d+)/,
    `/upload/q_auto/f_auto/c_limit,w_${width}/`
  );
};

export const cloudinaryImageProps = (
  src: string,
  sizes: string,
  widths: readonly number[] = responsiveWidths
) => ({
  sizes,
  srcSet: widths.map((width) => `${cloudinaryResponsiveUrl(src, width)} ${width}w`).join(', '),
});

export const imageUrls = {
  pngLogo: cloudinaryUrl('v1769540544/logo_stspcq.png'),
  banner1: cloudinarySizedUrl('v1769536579/banner_image_1_vuxzbe.jpg', 1600),
  banner2: cloudinarySizedUrl('v1769536579/banner_image_2_h5waim.jpg', 1600),
  banner3: cloudinarySizedUrl('v1769536580/banner_image_3_p0fjgl.jpg', 1600),
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
  retailPouches: cloudinaryUrl('v1778930457/retail_pouches_yt9vvm.png'),
  smallRetailPouch: cloudinaryUrl('v1778931361/pouch_v1_ns7vy8.png'),
  retailPack: cloudinaryUrl('v1769626229/retail_pack_dw5mxl.jpg'),
  saltGrinderBottles: cloudinaryUrl('v1778930458/sal_grinder_bottles_xsf1dt.png'),
  saltAdhesive: cloudinaryUrl('v1769626230/salt_adhesive_swjbdg.jpg'),
  scrubSalt: cloudinaryUrl('v1769626232/scrub_salt_q724sx.jpg'),
  bathSpaSalt: cloudinaryUrl('v1769626229/bath_spa_salt_uzfdnl.jpg'),
  massageStones: cloudinaryUrl('v1769626229/massage_stones_mcmsdu.jpg'),
  saltLamps: cloudinaryUrl('v1769626233/salt_lamps_nsidr5.jpg'),
  saltLampsSphere: cloudinaryUrl('v1769626231/salt_lamps_sphere_sawcrx.jpg'),
  candleHolders: cloudinaryUrl('v1769626229/candle_holders_ojgagc.jpg'),
  sculpturesDecor: cloudinaryUrl('v1769626232/sculptures_decor_aoplca.jpg'),
  saltPlates: cloudinaryUrl('v1769626232/salt_plates_wuu8dz.jpg'),
  rawRockSalt: cloudinaryUrl('v1769626229/raw_rock_salt_puwhay.jpg'),
  saltLumps: cloudinaryUrl('v1769626232/salt_lumps_ky1e8k.jpg'),
  rawSaltBulk: cloudinaryUrl('v1778930456/raw_salt_bulk_u5wgr5.png'),
  jarPackLabeled: cloudinaryUrl('v1778930453/jar_packed_labeled_dhjdxj.png'),
  jarPackUnlabeled: cloudinaryUrl('v1769777793/jar_pack_unlabeled_mkpqbh.jpg'),
  grinderBottlesTable: cloudinaryUrl('v1778930452/grinder_bottles_table_tvyp5h.png'),
  retailSet: cloudinaryUrl('v1778930458/retail_set_dzgidc.png'),
  lamBoxUsb: cloudinaryUrl('v1778930502/lamp_box_pack_dr0cky.png'),
  cartonPack: cloudinaryUrl('v1778930451/carton_packs_xzfdmk.png'),
  exportBoxes: cloudinaryUrl('v1778930451/export_boxes_ixyyqp.png'),
  ppBags: cloudinaryUrl('v1778930455/pp_bags_pfrtbe.png'),
  printedBox: cloudinaryUrl('v1778930496/printed_box_xgvf0l.png'),
  ironBasketPack: cloudinaryUrl('v1778930453/iron_basket_pack_jv3wbu.png'),
  decorGiftPack: cloudinaryUrl('v1778930451/decor_gift_pack_bmtnhb.png'),
  samplePack: cloudinaryUrl('v1778930455/lid_label_ihwgnx.png'),
  wrappedPallets: cloudinaryUrl('v1778930453/wrapped_pallets_ozwmub.png'),
  vacuumPack: cloudinaryUrl('v1778930451/vaccum_pack_rjbrhl.png'),
  woodenCrates: cloudinaryUrl('v1778930453/wooden_crates_afxk6y.png'),
  woodenBasket: cloudinaryUrl('v1778930461/wooden_basket_pack_azqk15.png'),
  lidLabel: cloudinaryUrl('v1778930455/lid_label_ihwgnx.png'),
} as const;
