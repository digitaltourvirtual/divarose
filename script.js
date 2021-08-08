(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": -87.24,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_29E3531D_260A_BD9C_41AE_C893BC3209AA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": -70.71,
  "pitch": -8.27
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_36098360_260A_BDA5_41A2_3DE78DED27EA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 173.92,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_36003380_260A_BD65_41B6_0DDAC9F0CA6D",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -6.08,
   "backwardYaw": 151.42,
   "distance": 1,
   "panorama": "this.panorama_1D1E0249_165F_7239_4197_EF2A829F27E2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D0C83FF_1658_91D9_4198_D39805A5971E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Output(1)",
 "id": "panorama_1A54733C_1648_925F_419F_188FE73B016D",
 "thumbnailUrl": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 135,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_159F3ED1_1B3F_E23B_41B1_DE08E146BF54",
  "this.overlay_1423F83B_1B3D_6E6F_4193_9C08ACCDE037"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Output(4)",
 "id": "panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709",
 "thumbnailUrl": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_146E19AB_1B3D_EE6F_41A1_098BF4A967B9",
  "this.overlay_14228B22_1B3D_2219_41AA_7B24DD13B1A4"
 ]
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_1D0C83FF_1658_91D9_4198_D39805A5971E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1A54733C_1648_925F_419F_188FE73B016D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1A54733C_1648_925F_419F_188FE73B016D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1D1E0249_165F_7239_4197_EF2A829F27E2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Output(5)",
 "id": "panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A",
 "thumbnailUrl": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_145A51DB_1B3D_7E2F_41A0_D88F550E0F21",
  "this.overlay_141294B2_1B3D_2679_41AA_87D3BA629376"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Output",
 "id": "panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2",
 "thumbnailUrl": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_145D35E9_1B3B_E1EB_41BA_9D3DC1BB1B09"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 78.06,
  "pitch": -11.02
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_361C833D_260A_BD9C_41AD_65D57BF338C9",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "items": [
  {
   "media": "this.panorama_1D0C83FF_1658_91D9_4198_D39805A5971E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1A54733C_1648_925F_419F_188FE73B016D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1A54733C_1648_925F_419F_188FE73B016D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1D1E0249_165F_7239_4197_EF2A829F27E2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 7, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 99.18,
  "pitch": -8.27
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3637A3C3_260A_BCEB_419A_6925609F491D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 151.42,
   "backwardYaw": -6.08,
   "distance": 1,
   "panorama": "this.panorama_1A54733C_1648_925F_419F_188FE73B016D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Output(2)",
 "id": "panorama_1D1E0249_165F_7239_4197_EF2A829F27E2",
 "thumbnailUrl": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_146E3C33_1B3D_267F_41B1_E4A12EF9FF5F",
  "this.overlay_14296D0E_1B3D_2629_41B7_A11F14890705"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetHfov": 125,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1A54733C_1648_925F_419F_188FE73B016D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Output(3)",
 "id": "panorama_1D0C83FF_1658_91D9_4198_D39805A5971E",
 "thumbnailUrl": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 135,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_15DBFAFE_1B3E_E3E9_419A_F5EBD3383EA2"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 124.9,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_29E8B2FD_260A_BC9C_41B1_CBB5A881CE01",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 144.18,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_29F822BE_260A_BC9D_4168_AF55E5021027",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": -28.58,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_29C2029D_260A_BC9F_41AB_6BBA0D469ECF",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": -92.76,
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_362063E2_260A_BCA4_41BF_188E4D0BC98A",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D1E0249_165F_7239_4197_EF2A829F27E2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Output(7)",
 "id": "panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE",
 "thumbnailUrl": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_144F9571_1B3B_26FB_4193_EFB9391F5434",
  "this.overlay_14194556_1B3B_2638_41A8_EC62C1670089"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D1E0249_165F_7239_4197_EF2A829F27E2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Output(6)",
 "id": "panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77",
 "thumbnailUrl": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_146C9D59_1B3D_2628_41A0_A0827970370F",
  "this.overlay_142B6E4C_1B3A_E228_41AE_89752C9CA95A",
  "this.overlay_14B4FABC_1B3B_2269_41AC_7AF12B89F8FC"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 97.35,
  "pitch": -10.1
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_29F1E2DD_260A_BC9C_41C1_D588E64CEDE4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 67.04,
  "pitch": -1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_363D13A2_260A_BCA5_4192_8F96011B2988",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1A54733C_1648_925F_419F_188FE73B016D_camera",
 "automaticZoomSpeed": 10
},
{
 "transitionDuration": 500,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "minWidth": 100,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "minHeight": 50,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_54B2586A_750B_85DC_41D9_68368732F926",
 "left": "0%",
 "width": 330,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_498E74F4_545B_B067_41CC_63589B8419E3"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "--- LEFT PANEL 6"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "class": "Container"
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 115.05,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 641,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "data": {
  "name": "-- SETTINGS"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
  "this.Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "---LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "maxHeight": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "maxHeight": 58,
 "data": {
  "name": "IconButton MUTE"
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1D0C83FF_1658_91D9_4198_D39805A5971E, this.camera_29F822BE_260A_BC9D_4168_AF55E5021027); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 62.63,
   "image": "this.AnimatedImageResource_0A946916_1D35_2E39_41B0_87DCD6F52CD9",
   "pitch": 9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 160.16,
   "distance": 100
  }
 ],
 "id": "overlay_159F3ED1_1B3F_E23B_41B1_DE08E146BF54",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 62.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1D1E0249_165F_7239_4197_EF2A829F27E2, this.camera_29C2029D_260A_BC9F_41AB_6BBA0D469ECF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.12,
   "image": "this.AnimatedImageResource_0A95C916_1D35_2E39_41B7_D71B26DB25A9",
   "pitch": -16.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -6.08,
   "distance": 100
  }
 ],
 "id": "overlay_1423F83B_1B3D_6E6F_4193_9C08ACCDE037",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.12,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77, this.camera_29F1E2DD_260A_BC9C_41C1_D588E64CEDE4); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.4,
   "image": "this.AnimatedImageResource_35581EF3_2619_64A4_4186_B3E887C5CBFA",
   "pitch": -29.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 78.6,
   "distance": 100
  }
 ],
 "id": "overlay_146E19AB_1B3D_EE6F_41A1_098BF4A967B9",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.96,
   "image": "this.AnimatedImageResource_35585EF4_2619_64AC_41C2_4D9A41D048D2",
   "pitch": -31.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -30.22,
   "distance": 100
  }
 ],
 "id": "overlay_14228B22_1B3D_2219_41AA_7B24DD13B1A4",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE, this.camera_363D13A2_260A_BCA5_4192_8F96011B2988); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.14,
   "image": "this.AnimatedImageResource_3559CEF4_2619_64AC_4193_128D1F30BF06",
   "pitch": -34.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 79.42,
   "distance": 100
  }
 ],
 "id": "overlay_145A51DB_1B3D_7E2F_41A0_D88F550E0F21",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.92,
   "image": "this.AnimatedImageResource_35591EF5_2619_64AC_41C0_557806BED7BB",
   "pitch": -27.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.4,
   "distance": 100
  }
 ],
 "id": "overlay_141294B2_1B3D_2679_41AA_87D3BA629376",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A, this.camera_361C833D_260A_BD9C_41AD_65D57BF338C9); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.02,
   "image": "this.AnimatedImageResource_355B3EF8_2619_64A4_41C1_54FB5B1BC2CA",
   "pitch": -34.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 67.96,
   "distance": 100
  }
 ],
 "id": "overlay_145D35E9_1B3B_E1EB_41BA_9D3DC1BB1B09",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77, this.camera_36098360_260A_BDA5_41A2_3DE78DED27EA); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.96,
   "image": "this.AnimatedImageResource_355F7EF2_2619_64A4_41C0_1C3DEB303765",
   "pitch": -31.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -36.35,
   "distance": 100
  }
 ],
 "id": "overlay_146E3C33_1B3D_267F_41B1_E4A12EF9FF5F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -36.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1A54733C_1648_925F_419F_188FE73B016D, this.camera_36003380_260A_BD65_41B6_0DDAC9F0CA6D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.9,
   "image": "this.AnimatedImageResource_3558BEF3_2619_64A4_417D_8E2D1764A3AC",
   "pitch": -34.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 151.42,
   "distance": 100
  }
 ],
 "id": "overlay_14296D0E_1B3D_2629_41B7_A11F14890705",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 24.9,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 58.58,
   "image": "this.AnimatedImageResource_0A941916_1D35_2E39_419E_1F2D5D174DF1",
   "pitch": -22.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -23.93,
   "distance": 100
  }
 ],
 "id": "overlay_15DBFAFE_1B3E_E3E9_419A_F5EBD3383EA2",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 58.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.5
  }
 ]
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "maxHeight": 58,
 "data": {
  "name": "IconButton HS "
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 58,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "maxHeight": 58,
 "data": {
  "name": "IconButton VR"
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "maxHeight": 58,
 "data": {
  "name": "IconButton GYRO"
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A, this.camera_362063E2_260A_BCA4_41BF_188E4D0BC98A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.65,
   "image": "this.AnimatedImageResource_355B8EF7_2619_64AC_41A9_9397504806DB",
   "pitch": -19.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -94.04,
   "distance": 100
  }
 ],
 "id": "overlay_144F9571_1B3B_26FB_4193_EFB9391F5434",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1D1E0249_165F_7239_4197_EF2A829F27E2, this.camera_3637A3C3_260A_BCEB_419A_6925609F491D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.85,
   "image": "this.AnimatedImageResource_355BEEF7_2619_64AC_41A0_0AC6D5BF87AD",
   "pitch": -31.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 102.74,
   "distance": 100
  }
 ],
 "id": "overlay_14194556_1B3B_2638_41A8_EC62C1670089",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1D1E0249_165F_7239_4197_EF2A829F27E2, this.camera_29E8B2FD_260A_BC9C_41B1_CBB5A881CE01); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.08,
   "image": "this.AnimatedImageResource_35596EF5_2619_64AC_41C2_881E90050E5B",
   "pitch": -30.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 97.42,
   "distance": 100
  }
 ],
 "id": "overlay_146C9D59_1B3D_2628_41A0_A0827970370F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.08,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.19,
   "image": "this.AnimatedImageResource_355ABEF6_2619_64AC_41BB_F979EF9CF539",
   "pitch": -30.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 12.74,
   "distance": 100
  }
 ],
 "id": "overlay_142B6E4C_1B3A_E228_41AE_89752C9CA95A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.19,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709, this.camera_29E3531D_260A_BD9C_41AE_C893BC3209AA); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.82,
   "image": "this.AnimatedImageResource_355A2EF6_2619_64AC_41AE_1591D1AF07FA",
   "pitch": -28.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -80.94,
   "distance": 100
  }
 ],
 "id": "overlay_14B4FABC_1B3B_2269_41AC_7AF12B89F8FC",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.02
  }
 ]
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "propagateClick": true,
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "class": "Container"
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_498E74F4_545B_B067_41CC_63589B8419E3",
 "left": 0,
 "width": 330,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_498C54F0_545B_B07F_41AD_BD74D9355024",
  "this.IconButton_498E64F4_545B_B067_41C8_E0221EDD8242"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "- EXPANDED"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "class": "Container"
},
{
 "layout": "horizontal",
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 110,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "shadow": false,
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 110,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "data": {
  "name": "button menu sup"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "minHeight": 1,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": "85.959%",
 "width": "91.304%",
 "backgroundOpacity": 0,
 "gap": 3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "center"
},
{
 "layout": "absolute",
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
  "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "scrollBarMargin": 2,
 "shadowHorizontalLength": 0,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "horizontalAlign": "right",
 "minHeight": 1,
 "id": "Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "left": "15%",
 "right": "15%",
 "children": [
  "this.IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "scrollBarWidth": 10
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A946916_1D35_2E39_41B0_87DCD6F52CD9",
 "levels": [
  {
   "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A95C916_1D35_2E39_41B7_D71B26DB25A9",
 "levels": [
  {
   "url": "media/panorama_1A54733C_1648_925F_419F_188FE73B016D_1_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35581EF3_2619_64A4_4186_B3E887C5CBFA",
 "levels": [
  {
   "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35585EF4_2619_64AC_41C2_4D9A41D048D2",
 "levels": [
  {
   "url": "media/panorama_1D0EC81C_1658_BE5F_41A9_15C53929E709_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3559CEF4_2619_64AC_4193_128D1F30BF06",
 "levels": [
  {
   "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35591EF5_2619_64AC_41C0_557806BED7BB",
 "levels": [
  {
   "url": "media/panorama_1D0C1906_1659_9E2A_41A8_46289B53BC4A_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_355B3EF8_2619_64A4_41C1_54FB5B1BC2CA",
 "levels": [
  {
   "url": "media/panorama_1D0C1A87_1658_B229_41A6_C32A0F77E8F2_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_355F7EF2_2619_64A4_41C0_1C3DEB303765",
 "levels": [
  {
   "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3558BEF3_2619_64A4_417D_8E2D1764A3AC",
 "levels": [
  {
   "url": "media/panorama_1D1E0249_165F_7239_4197_EF2A829F27E2_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A941916_1D35_2E39_419E_1F2D5D174DF1",
 "levels": [
  {
   "url": "media/panorama_1D0C83FF_1658_91D9_4198_D39805A5971E_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_355B8EF7_2619_64AC_41A9_9397504806DB",
 "levels": [
  {
   "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_355BEEF7_2619_64AC_41A0_0AC6D5BF87AD",
 "levels": [
  {
   "url": "media/panorama_1D0DEAFE_1659_93DB_41B5_ECD9134534CE_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35596EF5_2619_64AC_41C2_881E90050E5B",
 "levels": [
  {
   "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_355ABEF6_2619_64AC_41BB_F979EF9CF539",
 "levels": [
  {
   "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_355A2EF6_2619_64AC_41AE_1591D1AF07FA",
 "levels": [
  {
   "url": "media/panorama_1D0CDA06_1659_F22A_418E_A4D6510D7B77_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ]
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 30,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#0089C8"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "propagateClick": true,
 "data": {
  "name": "Container blue"
 },
 "backgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "class": "Container"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 4,
 "width": 50,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "verticalAlign": "middle",
 "shadow": false,
 "top": "40%",
 "paddingRight": 0,
 "bottom": "40%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_498E74F4_545B_B067_41CC_63589B8419E3, true, 0, null, null, false)",
 "maxHeight": 80,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 80,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "layout": "absolute",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_498C54F0_545B_B07F_41AD_BD74D9355024",
 "left": "0%",
 "width": 300,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_498C34F0_545B_B07F_41BD_B58E63E0B3FC",
  "this.Container_498D74F4_545B_B067_41D3_9F91485C184B",
  "this.Image_2B163043_25B1_CA1E_41BD_63718029EEF5"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 40,
 "backgroundColor": [
  "#0089C8"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingTop": 40,
 "paddingBottom": 40,
 "height": "100%",
 "gap": 10,
 "propagateClick": true,
 "data": {
  "name": "Buttons set"
 },
 "backgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingLeft": 40,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "class": "Container"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_498E64F4_545B_B067_41C8_E0221EDD8242",
 "left": 280,
 "width": 50,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_498E64F4_545B_B067_41C8_E0221EDD8242.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "40%",
 "paddingRight": 0,
 "bottom": "40%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_498E64F4_545B_B067_41C8_E0221EDD8242_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_498E74F4_545B_B067_41CC_63589B8419E3, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "maxHeight": 40,
 "data": {
  "name": "IconButton collapse"
 },
 "propagateClick": true,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 40,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 60,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "image button menu"
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 58,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "click": "this.shareTwitter(window.location.href)",
 "maxHeight": 58,
 "data": {
  "name": "IconButton TWITTER"
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 58,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "maxHeight": 58,
 "data": {
  "name": "IconButton FB"
 },
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 140,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "left": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "itemMode": "normal",
 "scrollBarColor": "#04A3E1",
 "itemPaddingRight": 3,
 "itemLabelFontFamily": "Oswald",
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "itemMaxHeight": 1000,
 "verticalAlign": "middle",
 "itemOpacity": 1,
 "width": "100%",
 "paddingRight": 70,
 "itemBorderRadius": 0,
 "height": "92%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "itemLabelFontStyle": "italic",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "paddingLeft": 70,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "minHeight": 1,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 70,
 "itemThumbnailShadow": false,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10,
 "borderRadius": 5,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "horizontalAlign": "center",
 "class": "ThumbnailGrid"
},
{
 "minHeight": 1,
 "id": "WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.946899989919!2d-44.19968488563296!3d-19.968735244670516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c39d7aba9b25%3A0x17697a79353186c2!2sDiva%20Ros%C3%A9%20J%C3%B3ias%20(pratas%20e%20semi%20j%C3%B3ias)!5e0!3m2!1spt-BR!2sbr!4v1628431740988!5m2!1spt-BR!2sbr",
 "shadow": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame"
 },
 "height": "100%",
 "propagateClick": false,
 "class": "WebFrame",
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 50,
 "id": "IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848",
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "iconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848.jpg",
 "shadow": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "75%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_pressed.jpg",
 "maxHeight": 50,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 50,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
  "this.IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
  "this.IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
  "this.IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "propagateClick": false,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_498C34F0_545B_B07F_41BD_B58E63E0B3FC",
 "left": "0%",
 "scrollBarOpacity": 0.15,
 "scrollBarColor": "#000000",
 "children": [
  "this.Container_498C04F0_545B_B07F_41C8_91BCDF503CDE",
  "this.Button_498C14F0_545B_B07F_41C7_C938E2EB46DE",
  "this.Container_498D54F1_545B_B061_41D3_D6C6823E053E",
  "this.Button_498D34F1_545B_B061_41CC_C7FA4D74A601",
  "this.Container_498C14F1_545B_B061_41C8_E3BA647331FB",
  "this.Button_498DE4F1_545B_B061_41D3_63DE2518EDC5",
  "this.Container_498D34F2_545B_B063_41CE_EF1298571ABE",
  "this.Container_498E14F2_545B_B063_41BB_494D2838A4CD",
  "this.Container_498EC4F3_545B_B061_41C7_5B45D376F74D"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "shadow": false,
 "top": "33.84%",
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "18.16%",
 "scrollBarMargin": 2,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 1"
 },
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 6
},
{
 "layout": "vertical",
 "horizontalAlign": "left",
 "minHeight": 1,
 "id": "Container_498D74F4_545B_B067_41D3_9F91485C184B",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "left": "0%",
 "children": [
  "this.HTMLText_498D54F4_545B_B067_41D1_C6FF626B4D08",
  "this.Container_498D24F4_545B_B067_41D3_1E56603A1693",
  "this.Container_498EC4F4_545B_B067_41D4_A0AFD617DEA5"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "bottom",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": 130,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "propagateClick": true,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "scaleMode": "fit_inside",
 "minHeight": 1,
 "id": "Image_2B163043_25B1_CA1E_41BD_63718029EEF5",
 "left": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "url": "skin/Image_2B163043_25B1_CA1E_41BD_63718029EEF5.jpg",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "0%",
 "paddingRight": 0,
 "height": "42.065%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "maxHeight": 864,
 "propagateClick": false,
 "data": {
  "name": "Image3323"
 },
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 864,
 "class": "Image",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "right",
 "minHeight": 50,
 "id": "IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633",
 "right": 20,
 "minWidth": 50,
 "borderSize": 0,
 "width": "100%",
 "iconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633.jpg",
 "verticalAlign": "top",
 "shadow": false,
 "top": 20,
 "paddingRight": 0,
 "height": "36.14%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_pressed.jpg",
 "maxHeight": 50,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 50,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transitionDuration": 500,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
 "left": "0%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "minWidth": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "minHeight": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "borderRadius": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 50,
 "id": "IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
 "left": 10,
 "minWidth": 50,
 "borderSize": 0,
 "width": "14.22%",
 "iconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 50,
 "id": "IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
 "right": 10,
 "minWidth": 50,
 "borderSize": 0,
 "width": "14.22%",
 "iconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "right",
 "minHeight": 50,
 "id": "IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F",
 "right": 20,
 "minWidth": 50,
 "borderSize": 0,
 "width": "10%",
 "iconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F.jpg",
 "verticalAlign": "top",
 "shadow": false,
 "top": 20,
 "paddingRight": 0,
 "height": "10%",
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_pressed.jpg",
 "maxHeight": 50,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 50,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_498C04F0_545B_B07F_41C8_91BCDF503CDE",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_498C14F0_545B_B07F_41C7_C938E2EB46DE",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button 1 - Reception"
 },
 "pressedBackgroundOpacity": 0,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "INSTAGRAM",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 10,
 "cursor": "hand",
 "click": "this.openLink('https://www.instagram.com/diva_rose_joias/', '_blank')",
 "class": "Button"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_498D54F1_545B_B061_41D3_D6C6823E053E",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_498D34F1_545B_B061_41CC_C7FA4D74A601",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button 2 - Rooms"
 },
 "pressedBackgroundOpacity": 0,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "FACEBOOK",
 "paddingBottom": 0,
 "gap": 23,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 10,
 "cursor": "hand",
 "click": "this.openLink('https://www.facebook.com/divarosejoiasfinas', '_blank')",
 "class": "Button"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_498C14F1_545B_B061_41C8_E3BA647331FB",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_498DE4F1_545B_B061_41D3_63DE2518EDC5",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button 3 - Amenities"
 },
 "pressedBackgroundOpacity": 0,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "WHATSAPP",
 "paddingBottom": 0,
 "gap": 23,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 10,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_498E14F2_545B_B063_41BB_494D2838A4CD, false, 0, null, null, false); this.openLink('https://api.whatsapp.com/send?phone=%2B553199878515&fbclid=IwAR2VnzkKHTVrombCTGOg5A18CisUH-KP2qvt-VQla_msXqjPFwxAGxRc6X0', '_blank')",
 "class": "Button"
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_498D34F2_545B_B063_41CE_EF1298571ABE",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "minHeight": 1,
 "id": "Container_498E14F2_545B_B063_41BB_494D2838A4CD",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0,
 "children": [
  "this.Container_498FE4F2_545B_B063_41BA_D8235AF33884",
  "this.Container_498FF4F2_545B_B063_41D3_4A4582DF8AEC",
  "this.Button_498D74F3_545B_B061_41D0_2FA576471727",
  "this.Button_498D44F3_545B_B061_418E_015D63C61CD1",
  "this.Button_498D54F3_545B_B061_41A8_427049DCFFEF",
  "this.Button_498D24F3_545B_B061_41C3_2F27F2C4BC83",
  "this.Button_498D34F3_545B_B061_41CC_B17EC474B478",
  "this.Button_498D04F3_545B_B061_41C2_2D555AAB9750",
  "this.Button_498D14F3_545B_B061_41C6_DAC15BDEC9C9",
  "this.Button_498EE4F3_545B_B061_41A2_3B3923D5CE0B"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "shadow": false,
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 200,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 5-1"
 },
 "visible": false,
 "scrollBarWidth": 7,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "propagateClick": true
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_498EC4F3_545B_B061_41C7_5B45D376F74D",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "minHeight": 1,
 "id": "HTMLText_498D54F4_545B_B067_41D1_C6FF626B4D08",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "height": 78,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "layout": "horizontal",
 "minHeight": 1,
 "id": "Container_498D24F4_545B_B067_41D3_1E56603A1693",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_498D04F4_545B_B067_41CA_4475BC565319",
  "this.IconButton_498D14F4_545B_B067_41B9_1C7612F1D7EC"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "bottom",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 56,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "propagateClick": false
},
{
 "layout": "horizontal",
 "minHeight": 1,
 "id": "Container_498EC4F4_545B_B067_41D4_A0AFD617DEA5",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_498E94F4_545B_B067_41B9_5C26D93BABA8"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 44,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 2"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "propagateClick": false
},
{
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "id": "Container_498FE4F2_545B_B063_41BA_D8235AF33884",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 1,
 "width": "100%",
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_498FF4F2_545B_B063_41D3_4A4582DF8AEC",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 8,
 "width": "100%",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_498D74F3_545B_B061_41D0_2FA576471727",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_498D44F3_545B_B061_418E_015D63C61CD1",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 23,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_498D54F3_545B_B061_41A8_427049DCFFEF",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_498D24F3_545B_B061_41C3_2F27F2C4BC83",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_498D34F3_545B_B061_41CC_B17EC474B478",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_498D04F3_545B_B061_41C2_2D555AAB9750",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_498D14F3_545B_B061_41C6_DAC15BDEC9C9",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadowSpread": 1,
 "id": "Button_498EE4F3_545B_B061_41A2_3B3923D5CE0B",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "borderColor": "#000000",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "paddingBottom": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_498D04F4_545B_B067_41CA_4475BC565319",
 "width": 44,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_498D04F4_545B_B067_41CA_4475BC565319.png",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 44,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_498D04F4_545B_B067_41CA_4475BC565319_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, true, 0, null, null, false)",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Thumblist"
 },
 "propagateClick": false,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_498D14F4_545B_B067_41B9_1C7612F1D7EC",
 "width": 44,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_498D14F4_545B_B067_41B9_1C7612F1D7EC.png",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 44,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_498D14F4_545B_B067_41B9_1C7612F1D7EC_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, true, 0, null, null, false)",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Location"
 },
 "propagateClick": false,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_498E94F4_545B_B067_41B9_5C26D93BABA8",
 "width": 50,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_498E94F4_545B_B067_41B9_5C26D93BABA8.png",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingRight": 0,
 "height": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_498E94F4_545B_B067_41B9_5C26D93BABA8_pressed.png",
 "maxHeight": 101,
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "propagateClick": false,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "borderRadius": 0
}],
 "scrollBarWidth": 10,
 "minHeight": 20,
 "id": "rootPlayer",
 "vrPolyfillScale": 0.7,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.MainViewer",
  "this.Container_54B2586A_750B_85DC_41D9_68368732F926",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
  "this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
  "this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2"
 ],
 "minWidth": 20,
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "defaultVRPointer": "laser",
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "width": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": true,
 "class": "Player",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
