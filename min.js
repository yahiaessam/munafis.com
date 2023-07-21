// فتح تطبيق WhatsApp عند النقر على الزر
function openWhatsApp(phone) {
    // تحويل رقم الهاتف إلى الصيغة المطلوبة
    phone = phone.replace(/\D/g, '');
  
    // إنشاء رابط الواتساب
    var url = 'https://api.whatsapp.com/send?phone=' + phone;
  
    // فتح نافذة جديدة لعرض رابط الواتساب
    window.open(url, '_blank');
  }