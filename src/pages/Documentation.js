import React from "react";
import "./Documentation.css";
import img1 from "../images/1.png"
import img2 from "../images/2.png"
import img3 from "../images/3.png"
import img4 from "../images/4.png"
import img5 from "../images/5.png"
import img6 from "../images/6.png"


function Documentation () {
  return (
    <div className="documentation">
      <h1>Документация</h1>
      <p>
        Приложение предназначено для создания образов физических и логических
        дисков в различных форматах. Оно поддерживает просмотр доступных дисков,
        выбор настроек образа, и отображение прогресса выполнения операций.
        Данная инструкция поможет вам понять, как работать с этим приложением.
      </p>
      <div>
        <ol>
          <li>
            <a href="#application-process">Процесс работы с приложением</a>
            <ol>
              <li>
                <a href="#launch-app">Запуск приложения</a>
              </li>
              <li>
                <a href="#select-disk">Выбор диска</a>
              </li>
              <li>
                <a href="#create-image">Создание образа</a>
              </li>
              <li>
                <a href="#track-progress">Отслеживание прогресса</a>
              </li>
              <li>
                <a href="#errors">Ошибки</a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#notes">Примечания</a>
            <ol>
              <li>
                <a href="#image-formats">Форматы образов</a>
              </li>
              <li>
                <a href="#buffer-recommendations">Рекомендации по буферу</a>
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div id="application-process">
        <h2>Процесс работы с приложением</h2>

        <h3 id="launch-app">1. Запуск приложения</h3>
        <p>
          При запуске откроется главное окно, отображающее доступные диски в
          левой панели. В правой панели пока ничего не отображается.
        </p>
        <img src={img1} alt="disk" className="img" />

        <h3 id="select-disk">2. Выбор диска</h3>
        <ol>
          <li>Выберите интересующий диск из списка на левой панели.</li>
          <li>
            В правой панели появится информация о выбранном диске:
            <ul>
              <li>Тип диска.</li>
              <li>Размер и свободное место.</li>
              <li>Количество разделов и файловая система.</li>
            </ul>
          </li>
        </ol>
        <img src={img2} alt="disk info" className="img" />


        <h3 id="create-image">3. Создание образа</h3>
        <ol>
          <li>Нажмите кнопку "Создать образ".</li>
          <img src={img3} alt="run" className="img" />
          <li>
            В появившемся окне выполните следующие шаги:
            <ul>
              <li>Укажите путь и имя создаваемого файла в поле "Имя файла".</li>
              <li>Выберите нужный формат образа (DD, Flat VMDK, Sparse VMDK).</li>
              <li>Установите размер буфера (по умолчанию 4096).</li>
            </ul>
            <img src={img4} alt="config" className="img" />
          </li>
          <li>Нажмите "Создать образ".</li>
          <img src={img5} alt="run" className="img" />
          <li>
            Процесс создания образа начнётся. Его прогресс будет отображён в виде
            полосы загрузки в главном окне.
          </li>
        </ol>
        <img src={img6} alt="progress" className="img" />

        <h3 id="track-progress">4. Отслеживание прогресса</h3>
        <p>
          В панели дисков для выбранного диска будет отображаться индикатор
          выполнения (%). Если возникает ошибка, она будет отображена рядом с
          именем диска.
        </p>

        <h3 id="errors">5. Ошибки</h3>
        <p>При возникновении ошибок:</p>
        <ul>
          <li>Убедитесь, что диск подключён и доступен.</li>
          <li>
            Проверьте путь для сохранения образа (должна быть доступная папка).
          </li>
          <li>Перезапустите процесс создания.</li>
        </ul>
      </div>

      <div id="notes">
        <h2>Примечания</h2>

        <h3 id="image-formats">Форматы образов:</h3>
        <ul>
          <li>.dd: подходит для универсального резервного копирования дисков.</li>
          <li>
            VMDK: используется для работы с виртуальными машинами (VMware и др.).
          </li>
        </ul>

        <h3 id="buffer-recommendations">Рекомендации по буферу:</h3>
        <p>
          Размер буфера влияет на скорость создания образа. Рекомендуется
          использовать значения 4096 или больше.
        </p>
      </div>
    </div>
  );
};

export default Documentation;
