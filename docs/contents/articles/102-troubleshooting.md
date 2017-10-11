ERRORS like
> Type 'Subscription' is not assignable to type 'Subscription'. Two different types with this name exist, but they are unrelated.

FIX:
This means that you have multiple copies of a dependency each with a different version. You can run this to see which of your
dependencies are including it in their own `node_modules` directories:
> find ./node_modules/ -type d -name "rxjs"

Then delete from your package.json any direct dependencies that are provided indirectly another way. You will get the version
required by that other indirect dependency



ERROR:
ERROR in [at-loader] ./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts:53:56
    TS2559: Type 'typeof UserMgmtDeleteDialogComponent' has no properties in common with type 'Component'.

FIX:
Type cast UserMgmtDeleteDialogComponent to Component: <Component>UserMgmtDeleteDialogComponent



ERROR:
reflect-metadata shim is required when using class decorators

FIX:
Add var reflect = require('reflect-metadata'); to test.ts
