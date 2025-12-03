// קובץ: script.js

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('productCarouselTrack');
    
    // בדיקה אם האלמנט קיים בעמוד הנוכחי
    if (track) {
        // משכפל את כל התוכן של הקרוסלה
        const trackContent = track.innerHTML;
        
        // מדביק את התוכן שוב, כך שיהיה מספיק תמונות ליצירת לולאה
        track.innerHTML = trackContent + trackContent;
    }
});