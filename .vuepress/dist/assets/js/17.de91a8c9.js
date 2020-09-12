(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{361:function(e,t,a){"use strict";a.r(t);var o=a(40),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrade-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-guide"}},[e._v("#")]),e._v(" Upgrade Guide")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#system-requirements"}},[e._v("System Requirements")])]),a("li",[a("a",{attrs:{href:"#steps-to-upgrade"}},[e._v("Steps to Upgrade")]),a("ul",[a("li",[a("a",{attrs:{href:"#step-1-update-composer-dependency"}},[e._v("Step - 1: Update Composer Dependency")])]),a("li",[a("a",{attrs:{href:"#step-2-cleanup-config"}},[e._v("Step - 2: Cleanup Config")])]),a("li",[a("a",{attrs:{href:"#step-3-publish-new-config-migration"}},[e._v("Step - 3: Publish New Config / Migration")])]),a("li",[a("a",{attrs:{href:"#step-4-restore-config"}},[e._v("Step - 4: Restore Config")])]),a("li",[a("a",{attrs:{href:"#step-5-make-payment"}},[e._v("Step - 5: Make Payment")])]),a("li",[a("a",{attrs:{href:"#step-6-import-old-data"}},[e._v("Step - 6: Import Old Data")])]),a("li",[a("a",{attrs:{href:"#step-7-change-model-polymorphic"}},[e._v("Step - 7: Change Model (Polymorphic)")])])])]),a("li",[a("a",{attrs:{href:"#done"}},[e._v("Done")])])])]),a("p"),e._v(" "),a("p",[e._v("If you are using older version of Laravel PayU with "),a("code",[e._v("Session")]),e._v(" driver, then this would be much easier. Otherwise you might have some difficulties importing old "),a("code",[e._v("payu_payments")]),e._v(" database table into the new "),a("code",[e._v("payu_transactions")]),e._v(" table.")]),e._v(" "),a("h2",{attrs:{id:"system-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[e._v("#")]),e._v(" System Requirements")]),e._v(" "),a("ul",[a("li",[e._v("You should be running "),a("code",[e._v("PHP >= 7.4")]),e._v(".")]),e._v(" "),a("li",[e._v("You need to have Laravel "),a("code",[e._v(">= 7.x")]),e._v(" for Laravel PayU "),a("code",[e._v("5.x")])])]),e._v(" "),a("h2",{attrs:{id:"steps-to-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-upgrade"}},[e._v("#")]),e._v(" Steps to Upgrade")]),e._v(" "),a("h3",{attrs:{id:"step-1-update-composer-dependency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-update-composer-dependency"}},[e._v("#")]),e._v(" Step - 1: Update Composer Dependency")]),e._v(" "),a("p",[e._v("First off, you will need to update your composer dependency.")]),e._v(" "),a("ul",[a("li",[e._v("Change the version in your "),a("code",[e._v("composer.json")]),e._v(" to make it look like "),a("code",[e._v('"tzsk/payu": "^5.0"')]),e._v(".")]),e._v(" "),a("li",[e._v("After that you should run "),a("code",[e._v("composer update")]),e._v(" to update the "),a("code",[e._v("lock")]),e._v(" file.")])]),e._v(" "),a("h3",{attrs:{id:"step-2-cleanup-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-cleanup-config"}},[e._v("#")]),e._v(" Step - 2: Cleanup Config")]),e._v(" "),a("p",[e._v("The config file structure and the migration also changed significantly so it is better to delete them to start fresh.")]),e._v(" "),a("ul",[a("li",[e._v("Delete old "),a("code",[e._v("config/payu.php")]),e._v(" config file.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Backup")]),e._v(" "),a("p",[e._v("Make sure you backup your "),a("code",[e._v("payu_payments")]),e._v(" table data and gateway config so that you can easily setup again.")])]),e._v(" "),a("h3",{attrs:{id:"step-3-publish-new-config-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-publish-new-config-migration"}},[e._v("#")]),e._v(" Step - 3: Publish New Config / Migration")]),e._v(" "),a("p",[e._v("Once you have cleared old files publish the new config and database migration file.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan payu:publish --config --migration\n\nphp artisan migrate\n")])])]),a("h3",{attrs:{id:"step-4-restore-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4-restore-config"}},[e._v("#")]),e._v(" Step - 4: Restore Config")]),e._v(" "),a("p",[e._v("Once you migrated the new "),a("code",[e._v("payu_transactions")]),e._v(" table you just need to configure the new "),a("code",[e._v("config/payu.php")]),e._v(" file.")]),e._v(" "),a("h3",{attrs:{id:"step-5-make-payment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-5-make-payment"}},[e._v("#")]),e._v(" Step - 5: Make Payment")]),e._v(" "),a("p",[e._v("Refactor the place where you make the payment in your application and change it to the new Fluent Interface according to the "),a("a",{attrs:{href:"/usage"}},[e._v("Usage")])]),e._v(" "),a("h3",{attrs:{id:"step-6-import-old-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-6-import-old-data"}},[e._v("#")]),e._v(" Step - 6: Import Old Data")]),e._v(" "),a("p",[e._v("I've created a Gist on github which defines a Command file which just dumps all the old transactions to the new table. It attaches all the old entries to the correct gateway entry in your newly setup config file.")]),e._v(" "),a("ul",[a("li",[e._v("Gist File: "),a("a",{attrs:{href:"https://github.com/tzsk",target:"_blank",rel:"noopener noreferrer"}},[e._v("PayuMigrateCommand"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("This command file should expose an artisan command "),a("code",[e._v("php artisan payu:migrate")]),e._v(". Place it inside the Commands folder of your Laravel App and you should be able to run in. If you have custom namespace setup for your app don't forget to change the namespace of the file.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Heads Up")]),e._v(" "),a("p",[e._v("Make sure you update your config and set the default you have been using in your old setup. And depending on how many records you have in your old payments table this might take a while.")])]),e._v(" "),a("h3",{attrs:{id:"step-7-change-model-polymorphic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-7-change-model-polymorphic"}},[e._v("#")]),e._v(" Step - 7: Change Model (Polymorphic)")]),e._v(" "),a("p",[e._v("This only applies if you are using the Polymorphic relation that 4.x provided.")]),e._v(" "),a("ul",[a("li",[e._v("Now the new trait that Laravel PayU exposes is "),a("code",[e._v("Tzsk\\Payu\\Models\\HasTransactions")]),e._v(".")]),e._v(" "),a("li",[e._v("And change the occurrences where you used the relationship "),a("code",[e._v("$entity->payments()")]),e._v(" to "),a("code",[e._v("$entity->transactions()")])]),e._v(" "),a("li",[e._v("Also where ever you have fetched reverse relation from "),a("code",[e._v("PayuPayment")]),e._v(" model instance like: "),a("code",[e._v("$payment->payable()")]),e._v(", update that to the new "),a("code",[e._v("$transaction->paidFor()")]),e._v(" relation.")])]),e._v(" "),a("h2",{attrs:{id:"done"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#done"}},[e._v("#")]),e._v(" Done")]),e._v(" "),a("p",[e._v("Finally you are all done, If you want you can keep the old "),a("code",[e._v("payu_payments")]),e._v(" table or get rid of that. It's totally up to you.")])])}),[],!1,null,null,null);t.default=s.exports}}]);