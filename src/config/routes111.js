// const routes = [
//   {
//     path: '/',
//     component: () => import("@/views/active/echarts/index.vue"),
//     meta: {
//       layout: 'Default',
//       name: '首页',
//     },
//   },
//   {
//     path: '/active/echarts',
//     component: () => import( '@/views/active/echarts/index.vue'),
//     meta: {
//       layout: 'Default',
//       name: 'echarts',
//     },
//   },
//   {
//     path: '/active/payment/BTC',
//     component: () => import( '@/views/active/payment/BTC.vue'),
//     meta: {
//       layout: 'Default',
//       name: 'BTC'
//     }
//   },
//   {
//     path: '/active/payment/CNY',
//     component: () => import( '@/views/active/payment/CNY.vue'),
//     meta: {
//       layout: 'Default',
//       name: 'BTC'
//     }
//   },
//   {
//     path: '/active/payment/airTm',
//     component: () => import( '@/views/active/payment/airTm.vue'),
//     meta: {
//       layout: 'Default',
//       name: 'airTm'
//     }
//   },
//   {
//     name: 'active-payment-banxa',
//     path: '/active/payment/banxa',
//     component: () => import( '@/views/active/payment/banxa.vue'),
//     meta: {
//       layout: 'Default',
//       name: 'banxa'
//     }
//   },
//   {
//     name: 'active-payment-cpsBTC',
//     path: '/active/payment/cpsBTC',
//     component: () => import( '@/views/active/payment/cpsBTC.vue'),
//     meta: {
//       layout: 'Default',
//       name: 'cpsBTC'
//     }
//   },
//   {
//     name: 'active-payment-cpsETH',
//     path: '/active/payment/cpsETH',
//     component: () => import( '@/views/active/payment/cpsETH.vue'),
//     meta: {
//       layout: 'Default',
//       name: 'cpsETH'
//     }
//   },
//   {
//     name: 'active-payment-croinPlus',
//     path: '/active/payment/croinPlus',
//     component: () => import( '@/views/active/payment/croinPlus.vue'),
//     meta: {
//       layout: 'Default',
//       name: 'croinPlus'
//     }
//   },
//   {
//     name: 'active-payment-eeziepay',
//     path: '/active/payment/eeziepay',
//     component: () => import( '@/views/active/payment/eeziepay.vue'),
//     meta: {
//       layout: 'Default',
//       name: 'eeziepay'
//     }
//   },
//   {
//     name: 'active-payment-fasapay',
//     path: '/active/payment/fasapay',
//     component: () => import( '@/views/active/payment/fasapay.vue'),
//     meta: {
//       layout: 'Default',
//       name: 'eeziepay'
//     }
//   },
//   {
//     name: 'active-payment',
//     path: '/active/payment',
//     component: () => import( '@/views/active/payment/index.vue'), meta: {
//       layout: 'Default',
//       name: 'payment'
//     }
//   },
//   {
//     name: 'active-payment-japanOne',
//     path: '/active/payment/japanOne',
//     component: () => import( '@/views/active/payment/japanOne.vue'), meta: {
//       layout: 'Default',
//       name: 'japanOne'
//     }
//
//   },
//   {
//     name: 'active-payment-localBankTransfer',
//     path: '/active/payment/localBankTransfer',
//     component: () => import( '@/views/active/payment/localBankTransfer.vue'), meta: {
//       layout: 'Default',
//       name: 'localBankTransfer'
//     }
//
//   },
//   {
//     name: 'active-payment-myFatoorah',
//     path: '/active/payment/myFatoorah',
//     component: () => import( '@/views/active/payment/myFatoorah.vue'), meta: {
//       layout: 'Default',
//       name: 'myFatoorah'
//     }
//
//   },
//   {
//     name: 'active-payment-neteller',
//     path: '/active/payment/neteller',
//     component: () => import( '@/views/active/payment/neteller.vue'), meta: {
//       layout: 'Default',
//       name: 'neteller'
//     }
//
//   },
//   {
//     name: 'active-payment-pagsmile',
//     path: '/active/payment/pagsmile',
//     component: () => import( '@/views/active/payment/pagsmile.vue'), meta: {
//       layout: 'Default',
//       name: 'pagsmile'
//     }
//
//   },
//   {
//     name: 'active-payment-paymentAsia',
//     path: '/active/payment/paymentAsia',
//     component: () => import( '@/views/active/payment/paymentAsia.vue'), meta: {
//       layout: 'Default',
//       name: 'paymentAsia'
//     }
//
//   },
//   {
//     name: 'active-payment-skrill',
//     path: '/active/payment/skrill',
//     component: () => import( '@/views/active/payment/skrill.vue'), meta: {
//       layout: 'Default',
//       name: 'skrill'
//     }
//
//   },
//   {
//     name: 'active-payment-solidpay',
//     path: '/active/payment/solidpay',
//     component: () => import( '@/views/active/payment/solidpay.vue'), meta: {
//       layout: 'Default',
//       name: 'solidpay'
//     }
//
//   },
//   {
//     name: 'active-payment-usdt',
//     path: '/active/payment/usdt',
//     component: () => import( '@/views/active/payment/usdt.vue'), meta: {
//       layout: 'Default',
//       name: 'usdt'
//     }
//
//   },
//   {
//     name: 'active-payment-virtualpay',
//     path: '/active/payment/virtualpay',
//     component: () => import( '@/views/active/payment/virtualpay.vue'), meta: {
//       layout: 'Default',
//       name: 'virtualpay'
//     }
//
//   },
//   {
//     name: 'active-payment-wireTransfer',
//     path: '/active/payment/wireTransfer',
//     component: () => import( '@/views/active/payment/wireTransfer.vue'), meta: {
//       layout: 'Default',
//       name: 'wireTransfer'
//     }
//
//   },
//   {
//     name: 'active-payment-wiseEmailTransfer',
//     path: '/active/payment/wiseEmailTransfer',
//     component: () => import( '@/views/active/payment/wiseEmailTransfer.vue'), meta: {
//       layout: 'Default',
//       name: 'wiseEmailTransfer'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-bpay',
//     path: '/active/paymentOLD/bpay',
//     component: () => import( '@/views/active/paymentOLD/bpay/index.vue'), meta: {
//       layout: 'Default',
//       name: 'bpay'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-dasshpe-bank',
//     path: '/active/paymentOLD/dasshpe/bank',
//     component: () => import( '@/views/active/paymentOLD/dasshpe/bank.vue'), meta: {
//       layout: 'Default',
//       name: 'bank'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-dasshpe-upi',
//     path: '/active/paymentOLD/dasshpe/upi',
//     component: () => import( '@/views/active/paymentOLD/dasshpe/upi.vue'), meta: {
//       layout: 'Default',
//       name: 'upi'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-dasshpe-wallet',
//     path: '/active/paymentOLD/dasshpe/wallet',
//     component: () => import( '@/views/active/paymentOLD/dasshpe/wallet.vue'), meta: {
//       layout: 'Default',
//       name: 'wallet'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-deposit',
//     path: '/active/paymentOLD/deposit',
//     component: () => import( '@/views/active/paymentOLD/deposit/index.vue'), meta: {
//       layout: 'Default',
//       name: 'deposit'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-deposit-indianetbanking',
//     path: '/active/paymentOLD/deposit/indianetbanking',
//     component: () => import( '@/views/active/paymentOLD/deposit/indianetbanking.vue'), meta: {
//       layout: 'Default',
//       name: 'indianetbanking'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-disclaimer',
//     path: '/active/paymentOLD/disclaimer',
//     component: () => import( '@/views/active/paymentOLD/disclaimer.vue'), meta: {
//       layout: 'Default',
//       name: 'disclaimer'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-equals',
//     path: '/active/paymentOLD/equals',
//     component: () => import( '@/views/active/paymentOLD/equals/index.vue'), meta: {
//       layout: 'Default',
//       name: 'equals'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-failed',
//     path: '/active/paymentOLD/failed',
//     component: () => import( '@/views/active/paymentOLD/failed.vue'), meta: {
//       layout: 'Default',
//       name: 'failed'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-hongkong-banktransfer',
//     path: '/active/paymentOLD/hongkong/banktransfer',
//     component: () => import( '@/views/active/paymentOLD/hongkong/banktransfer.vue'), meta: {
//       layout: 'Default',
//       name: 'banktransfer'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-hongkong-qrcode',
//     path: '/active/paymentOLD/hongkong/qrcode',
//     component: () => import( '@/views/active/paymentOLD/hongkong/qrcode.vue'), meta: {
//       layout: 'Default',
//       name: 'qrcode'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-india',
//     path: '/active/paymentOLD/india',
//     component: () => import( '@/views/active/paymentOLD/india/index.vue'), meta: {
//       layout: 'Default',
//       name: 'india'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-maintenance',
//     path: '/active/paymentOLD/maintenance',
//     component: () => import( '@/views/active/paymentOLD/maintenance/index.vue'), meta: {
//       layout: 'Default',
//       name: 'maintenance'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-mongolia',
//     path: '/active/paymentOLD/mongolia',
//     component: () => import( '@/views/active/paymentOLD/mongolia/index.vue'), meta: {
//       layout: 'Default',
//       name: 'mongolia'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-nigeria',
//     path: '/active/paymentOLD/nigeria',
//     component: () => import( '@/views/active/paymentOLD/nigeria/index.vue'), meta: {
//       layout: 'Default',
//       name: 'nigeria'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-notsupport',
//     path: '/active/paymentOLD/notsupport',
//     component: () => import( '@/views/active/paymentOLD/notsupport/index.vue'), meta: {
//       layout: 'Default',
//       name: 'notsupport'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-success',
//     path: '/active/paymentOLD/success',
//     component: () => import( '@/views/active/paymentOLD/success.vue'), meta: {
//       layout: 'Default',
//       name: 'success'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-telegraphic',
//     path: '/active/paymentOLD/telegraphic',
//     component: () => import( '@/views/active/paymentOLD/telegraphic/index.vue'), meta: {
//       layout: 'Default',
//       name: 'telegraphic'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-wronginfo',
//     path: '/active/paymentOLD/wronginfo',
//     component: () => import( '@/views/active/paymentOLD/wronginfo/index.vue'), meta: {
//       layout: 'Default',
//       name: 'wronginfo'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-xpay-inrbank',
//     path: '/active/paymentOLD/xpay/inrbank',
//     component: () => import( '@/views/active/paymentOLD/xpay/inrbank.vue'), meta: {
//       layout: 'Default',
//       name: 'inrbank'
//     }
//
//   },
//   {
//     name: 'active-paymentOLD-xpay-vietbank',
//     path: '/active/paymentOLD/xpay/vietbank',
//     component: () => import( '@/views/active/paymentOLD/xpay/vietbank.vue'), meta: {
//       layout: 'Default',
//       name: 'vietbank'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-BTC',
//     path: '/noTitle/active/withdrawal/BTC',
//     component: () => import( '@/views/noTitle/active/withdrawal/BTC.vue'), meta: {
//       layout: 'Default',
//       name: 'BTC'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-CNY',
//     path: '/noTitle/active/withdrawal/CNY',
//     component: () => import( '@/views/noTitle/active/withdrawal/CNY.vue'), meta: {
//       layout: 'Default',
//       name: 'CNY'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-addBankCard',
//     path: '/noTitle/active/withdrawal/addBankCard',
//     component: () => import( '@/views/noTitle/active/withdrawal/addBankCard.vue'), meta: {
//       layout: 'Default',
//       name: 'addBankCard'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-addWalletAddress',
//     path: '/noTitle/active/withdrawal/addWalletAddress',
//     component: () => import( '@/views/noTitle/active/withdrawal/addWalletAddress.vue'), meta: {
//       layout: 'Default',
//       name: 'addWalletAddress'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-airTm',
//     path: '/noTitle/active/withdrawal/airTm',
//     component: () => import( '@/views/noTitle/active/withdrawal/airTm.vue'), meta: {
//       layout: 'Default',
//       name: 'airTm'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-cpsBTC',
//     path: '/noTitle/active/withdrawal/cpsBTC',
//     component: () => import( '@/views/noTitle/active/withdrawal/cpsBTC.vue'), meta: {
//       layout: 'Default',
//       name: 'cpsBTC'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-cpsETH',
//     path: '/noTitle/active/withdrawal/cpsETH',
//     component: () => import( '@/views/noTitle/active/withdrawal/cpsETH.vue'), meta: {
//       layout: 'Default',
//       name: 'cpsETH'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-croinPlus',
//     path: '/noTitle/active/withdrawal/croinPlus',
//     component: () => import( '@/views/noTitle/active/withdrawal/croinPlus.vue'), meta: {
//       layout: 'Default',
//       name: 'croinPlus'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-eeziepay',
//     path: '/noTitle/active/withdrawal/eeziepay',
//     component: () => import( '@/views/noTitle/active/withdrawal/eeziepay.vue'), meta: {
//       layout: 'Default',
//       name: 'eeziepay'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-fasapay',
//     path: '/noTitle/active/withdrawal/fasapay',
//     component: () => import( '@/views/noTitle/active/withdrawal/fasapay.vue'), meta: {
//       layout: 'Default',
//       name: 'fasapay'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal',
//     path: '/noTitle/active/withdrawal',
//     component: () => import( '@/views/noTitle/active/withdrawal/index.vue'), meta: {
//       layout: 'Default',
//       name: 'withdrawal'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-japanOne',
//     path: '/noTitle/active/withdrawal/japanOne',
//     component: () => import( '@/views/noTitle/active/withdrawal/japanOne.vue'), meta: {
//       layout: 'Default',
//       name: 'japanOne'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-localBankTransfer',
//     path: '/noTitle/active/withdrawal/localBankTransfer',
//     component: () => import( '@/views/noTitle/active/withdrawal/localBankTransfer.vue'), meta: {
//       layout: 'Default',
//       name: 'localBankTransfer'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-myFatoorah',
//     path: '/noTitle/active/withdrawal/myFatoorah',
//     component: () => import( '@/views/noTitle/active/withdrawal/myFatoorah.vue'), meta: {
//       layout: 'Default',
//       name: 'myFatoorah'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-neteller',
//     path: '/noTitle/active/withdrawal/neteller',
//     component: () => import( '@/views/noTitle/active/withdrawal/neteller.vue'), meta: {
//       layout: 'Default',
//       name: 'neteller'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-pagsmile',
//     path: '/noTitle/active/withdrawal/pagsmile',
//     component: () => import( '@/views/noTitle/active/withdrawal/pagsmile.vue'), meta: {
//       layout: 'Default',
//       name: 'pagsmile'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-paymentAsia',
//     path: '/noTitle/active/withdrawal/paymentAsia',
//     component: () => import( '@/views/noTitle/active/withdrawal/paymentAsia.vue'), meta: {
//       layout: 'Default',
//       name: 'paymentAsia'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-paymentAsiaPHP',
//     path: '/noTitle/active/withdrawal/paymentAsiaPHP',
//     component: () => import( '@/views/noTitle/active/withdrawal/paymentAsiaPHP.vue'), meta: {
//       layout: 'Default',
//       name: 'paymentAsiaPHP'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-paymentAsiaPaytrust',
//     path: '/noTitle/active/withdrawal/paymentAsiaPaytrust',
//     component: () => import( '@/views/noTitle/active/withdrawal/paymentAsiaPaytrust.vue'), meta: {
//       layout: 'Default',
//       name: 'paymentAsiaPaytrust'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-skrill',
//     path: '/noTitle/active/withdrawal/skrill',
//     component: () => import( '@/views/noTitle/active/withdrawal/skrill.vue'), meta: {
//       layout: 'Default',
//       name: 'skrill'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-solidpay',
//     path: '/noTitle/active/withdrawal/solidpay',
//     component: () => import( '@/views/noTitle/active/withdrawal/solidpay.vue'), meta: {
//       layout: 'Default',
//       name: 'solidpay'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-usdt',
//     path: '/noTitle/active/withdrawal/usdt',
//     component: () => import( '@/views/noTitle/active/withdrawal/usdt.vue'), meta: {
//       layout: 'Default',
//       name: 'usdt'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-virtualpay',
//     path: '/noTitle/active/withdrawal/virtualpay',
//     component: () => import( '@/views/noTitle/active/withdrawal/virtualpay.vue'), meta: {
//       layout: 'Default',
//       name: 'virtualpay'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-walletAddressList',
//     path: '/noTitle/active/withdrawal/walletAddressList',
//     component: () => import( '@/views/noTitle/active/withdrawal/walletAddressList.vue'), meta: {
//       layout: 'Default',
//       name: 'walletAddressList'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-wireTransfer1',
//     path: '/noTitle/active/withdrawal/wireTransfer1',
//     component: () => import( '@/views/noTitle/active/withdrawal/wireTransfer1.vue'), meta: {
//       layout: 'Default',
//       name: 'wireTransfer1'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-wireTransfer2',
//     path: '/noTitle/active/withdrawal/wireTransfer2',
//     component: () => import( '@/views/noTitle/active/withdrawal/wireTransfer2.vue'), meta: {
//       layout: 'Default',
//       name: 'wireTransfer2'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawal-wiseEmailTransfer',
//     path: '/noTitle/active/withdrawal/wiseEmailTransfer',
//     component: () => import( '@/views/noTitle/active/withdrawal/wiseEmailTransfer.vue'), meta: {
//       layout: 'Default',
//       name: 'wiseEmailTransfer'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawalOLD-ausbank',
//     path: '/noTitle/active/withdrawalOLD/ausbank',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/ausbank.vue'), meta: {
//       layout: 'Default',
//       name: 'ausbank'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawalOLD-bitcoin',
//     path: '/noTitle/active/withdrawalOLD/bitcoin',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/bitcoin.vue'), meta: {
//       layout: 'Default',
//       name: 'bitcoin'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawalOLD-card',
//     path: '/noTitle/active/withdrawalOLD/card',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/card.vue'), meta: {
//       layout: 'Default',
//       name: 'card'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawalOLD-direct_otp_authentication',
//     path: '/noTitle/active/withdrawalOLD/direct_otp_authentication',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/direct_otp_authentication.vue'), meta: {
//       layout: 'Default',
//       name: 'direct_otp_authentication'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawalOLD-disclaimer',
//     path: '/noTitle/active/withdrawalOLD/disclaimer',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/disclaimer.vue'), meta: {
//       layout: 'Default',
//       name: 'disclaimer'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawalOLD-ewallet',
//     path: '/noTitle/active/withdrawalOLD/ewallet',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/ewallet.vue'), meta: {
//       layout: 'Default',
//       name: 'ewallet'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawalOLD-fasapay',
//     path: '/noTitle/active/withdrawalOLD/fasapay',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/fasapay.vue'), meta: {
//       layout: 'Default',
//       name: 'fasapay'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawalOLD-hongkong',
//     path: '/noTitle/active/withdrawalOLD/hongkong',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/hongkong.vue'), meta: {
//       layout: 'Default',
//       name: 'hongkong'
//     }
//
//   },
//   {
//     name: 'noTitle-active-withdrawalOLD-indbank',
//     path: '/noTitle/active/withdrawalOLD/indbank',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/indbank.vue'), meta: {
//       layout: 'Default',
//       name: 'indbank'
//     }
//
//   },
//   {
//     path: '/noTitle/active/withdrawalOLD/indbankV2',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/indbankV2.vue'), meta: {
//       layout: 'Default',
//       name: 'indbankV2'
//     }
//
//   },
//   {
//     path: '/noTitle/active/withdrawalOLD',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/index.vue'), meta: {
//       layout: 'Default',
//       name: 'withdrawalOLD'
//     }
//
//   },
//   {
//     path: '/noTitle/active/withdrawalOLD/mixbank',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/mixbank.vue'), meta: {
//       layout: 'Default',
//       name: 'mixbank'
//     }
//
//   },
//   {
//     path: '/noTitle/active/withdrawalOLD/mixbankV2',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/mixbankV2.vue'), meta: {
//       layout: 'Default',
//       name: 'mixbankV2'
//     }
//
//   },
//   {
//     path: '/noTitle/active/withdrawalOLD/otp_authentication',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/otp_authentication.vue'), meta: {
//       layout: 'Default',
//       name: 'otp_authentication'
//     }
//
//   },
//   {
//     path: '/noTitle/active/withdrawalOLD/summary',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/summary.vue'), meta: {
//       layout: 'Default',
//       name: 'summary'
//     }
//
//   },
//   {
//     path: '/noTitle/active/withdrawalOLD/thaibank',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/thaibank.vue'), meta: {
//       layout: 'Default',
//       name: 'thaibank'
//     }
//
//   },
//   {
//     path: '/noTitle/active/withdrawalOLD/thaibankV2',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/thaibankV2.vue'), meta: {
//       layout: 'Default',
//       name: 'thaibankV2'
//     }
//
//   },
//   {
//     path: '/noTitle/active/withdrawalOLD/unionadd',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/unionadd.vue'), meta: {
//       layout: 'Default',
//       name: 'unionadd'
//     }
//
//   },
//   {
//     path: '/noTitle/active/withdrawalOLD/unionpay',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/unionpay.vue'), meta: {
//       layout: 'Default',
//       name: 'unionpay'
//     }
//
//   },
//   {
//     path: '/noTitle/active/withdrawalOLD/unionpayselection',
//     component: () => import( '@/views/noTitle/active/withdrawalOLD/unionpayselection.vue'), meta: {
//       layout: 'Default',
//       name: 'unionpayselection'
//     }
//
//   },
//   {
//     path: '/support/news/analysis/comments',
//     component: () => import( '@/views/support/news/analysis/comments.vue'), meta: {
//       layout: 'Default',
//       name: 'comments'
//     }
//
//   },
//   {
//     path: '/support/news/analysis/detail',
//     component: () => import( '@/views/support/news/analysis/detail.vue'), meta: {
//       layout: 'Default',
//       name: 'detail'
//     }
//
//   },
//   {
//     path: '/support/news/fxstreet',
//     component: () => import( '@/views/support/news/fxstreet.vue'), meta: {
//       layout: 'Default',
//       name: 'fxstreet'
//     }
//
//   },
//   {
//     path: '/support/news/newsletter',
//     component: () => import( '@/views/support/news/newsletter.vue'), meta: {
//       layout: 'Default',
//       name: 'newsletter'
//     }
//
//   },
//   {
//     path: '/support/notice/notice',
//     component: () => import( '@/views/support/notice/notice.vue'), meta: {
//       layout: 'Default',
//       name: 'notice'
//     }
//
//   },
//   {
//     path: '/support/protocol/client_agreement',
//     component: () => import( '@/views/support/protocol/client_agreement.vue'), meta: {
//       layout: 'Default',
//       name: 'client_agreement'
//     }
//
//   },
//   {
//     path: '/support/protocol/client_agreement_2',
//     component: () => import( '@/views/support/protocol/client_agreement_2.vue'), meta: {
//       layout: 'Default',
//       name: 'client_agreement_2'
//     }
//   },
//   {
//     path: '/support/protocol/complaints_procedure_policy',
//     component: () => import( '@/views/support/protocol/complaints_procedure_policy.vue'), meta: {
//       layout: 'Default',
//       name: 'complaints_procedure_policy'
//     }
//
//   },
//   {
//     path: '/support/protocol/leverage_risk',
//     component: () => import( '@/views/support/protocol/leverage_risk.vue'), meta: {
//       layout: 'Default',
//       name: 'leverage_risk'
//     }
//   },
//   {
//
//     path: '/support/protocol/live_account_tnc',
//     component: () => import( '@/views/support/protocol/live_account_tnc.vue'), meta: {
//       layout: 'Default',
//       name: 'live_account_tnc'
//     }
//   },
//   {
//     path: '/support/protocol/privacy_security_policy',
//     component: () => import( '@/views/support/protocol/privacy_security_policy.vue'), meta: {
//       layout: 'Default',
//       name: 'privacy_security_policy'
//     }
//
//   },
//   {
//     path: '/support/register/download',
//     component: () => import( '@/views/support/register/download.vue'), meta: {
//       layout: 'Default',
//       name: 'download'
//     }
//
//   },
//   {
//     path: '/support/register/entry',
//     component: () => import( '@/views/support/register/entry.vue'),
//     meta: {
//       layout: 'Default',
//       name: 'entry'
//     }
//
//   },
//   {
//     path: '/support/register/register',
//     component: () => import( '@/views/support/register/register.vue'),
//     meta: {
//       layout: 'Default',
//       name: 'register'
//     }
//
//   }
// ];
//
//
// export default routes;
