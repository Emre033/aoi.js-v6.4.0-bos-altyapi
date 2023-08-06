// Örnek istatistik komutu
module.exports = {
    name:"istatistik",
    code:`
    $title[1;İstatistik]
    $description[1;
    ## Genel Veriler
    Kanal Sayısı: $allchannelsCount 
    Sunucu Sayısı: $guildCount
    Toplam Kullanıcı Sayısı: $allMembersCount
    ## Sistem Bilgisi
    RAM Kullanımı: $ram 
    CPU Kullanımı $cpu
    ## Uptime Değerleri
    $uptime
    ## Gecikme Değerleri
    Bot Gecikmesi: $ping 
    Mesaj Gecikmesi: $messagePing
    Veritabanı Gecikmesi: $databaseping
    ## Geliştirici Bilgileri
    Bot Sahibi: $userTag[Senin IDn]
    `}
    // BU ALTYAPIYI İZİNSİZ PAYLAŞMAK YASAKTIR
