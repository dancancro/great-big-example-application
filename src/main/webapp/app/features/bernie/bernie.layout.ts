export interface BerniePageLayout {
    editable: boolean;
    expanded: boolean;
    scrollY: number;
    bernieSearchTerm: string;
    // isTouched: Function;
};

export const initialBerniePageLayout: BerniePageLayout = {
    editable: false,
    expanded: false,
    scrollY: 0,
    bernieSearchTerm: ''
    // isTouched: function (claims) {
    //   let _touched = false;
    //   claims.forEach(claim => {
    //     claim.rebuttals.forEach(rebuttal => {
    //       if (rebuttal && rebuttal.isTouched()) {
    //         _touched = true;
    //       }
    //     });
    //   });
    //   return _touched;
    // }
};
