const routes = [
    {
        path: "/QNA/CustomerInquiryForm",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/CustomerInquiryForm')
    },
    {
        path: "/QNA/FAQ",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/Faq')
    },
    {
        path: "/QNA/Notice",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/Notice')
    },
    {
        path: "/QNA/noticeform",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/NoticeForm')
    },
    
   
    
];

export default routes;