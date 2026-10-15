const supabaseUrl = "https://fnzkqeipeyrdlmynxult.supabase.co";
const supabaseKey = "sb_publishable_-KM2lKATrplcdq0Ky_T-ww_0kgQMFqc";

window.supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
window.supabase = window.supabaseClient;






// 1. Появление окна ровно через 1 секунду (1000 миллисекунд)
setTimeout(function() {
  const modal = document.getElementById('myModal');
  if (modal) {
    modal.style.display = 'flex'; /* Меняем none на flex для активации центрирования */
  }
}, 1000);

// 2. Логика исчезновения при клике на галочку
const checkbox = document.getElementById('closeCheckbox');

if (checkbox) {
  checkbox.onclick = function() {
    if (this.checked) {
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none'; /* Полностью скрываем окно */
      }
      this.checked = false; /* Сбрасываем галочку, чтобы при перезагрузке она была пустой */
    }
  };
}