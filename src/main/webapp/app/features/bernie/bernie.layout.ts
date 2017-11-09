export interface BerniePageLayout {
    editable: boolean;
    expanded: boolean;
    dirty: boolean;
    bernieSearchTerm: string;
    // isTouched: Function;
};

export const initialBerniePageLayout: BerniePageLayout = {
    editable: false,
    expanded: false,
    dirty: false,
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
