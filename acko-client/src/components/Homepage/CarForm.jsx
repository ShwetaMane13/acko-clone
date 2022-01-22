import { useState } from "react";

export const CarForm = () => {

    const [carNumber, setCarNumber] = useState("");

    const isValidCarNumber = (data) => {
      const pattern = new RegExp(
        "^[A-Z|a-z]{2}([1-9]{1}|[0-9]{2})[A-Z|a-z]{0,2}[0-9]{4}$"
      );
      if (pattern.test(data)) {
        return true;
      } else {
        return false;
      }
    };

    const handleKeyUp = () => {
        const status = isValidCarNumber(carNumber);
        console.log(status);
      };

      

    return (
        <div className="mid_div">
            <img className="left_banner" src="https://acko-home-prod.ackoassets.com/next_assets/eb5a39996779eebb83cae41d02d9f74d91aedcf7/_next/static/images/homepage-banner-illustration-1-5d2a4d352884a025c5e728efb0a4c6ce.svg" alt="left-banner" />

            <p className="insurance_text">Insurance made easy</p>
            <p className="tag_line">Zero commission. Zero paperwork</p>

            <div className="categories">
                <div>
                <img className="cat_img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjQiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9Ii0xNi45MzUiLz48cGF0aCBkPSJNMzIuMDg2IDE3LjE0N2MtMi4wNDMtLjcwNC0yLjc1My0uODQ5LTUuMzUzLTEuMjg1LS41MDMtLjA4OS0uOTgzLS4yNzktMS4zMTEtLjY3bC00LjA5Ny00LjAyMmMtLjUyNC0uNTE0LTEuMjAyLS44MzgtMS45MzQtLjkxNmEzOS43OCAzOS43OCAwIDAgMC04LjU1NS0uMDQ1Yy0uOTcyLjEwMS0xLjg1Ny42MTQtMi40MjUgMS40MTlsLTIuMjQgMy4xODRhLjc2Ljc2IDAgMCAxLS40NDguMzEzbC0xLjM1NS4zNDZjLS44NDEuMjIzLTEuNDA5IDEuMDE3LTEuMzY2IDEuODg4bC4yMjkgNC4zNDZjLjA1NS45ODMuODQxIDEuNzQzIDEuODAzIDEuNzQzaC42ODh2LS4wMjJjMC0yLjUxNCAxLjk4OC00LjU0OCA0LjQ0Ny00LjU0OHM0LjQ0NyAyLjAzNCA0LjQ0NyA0LjU0OHYuMDIyaDguMDQxdi0uMDIyYzAtMi41MTQgMS45ODgtNC41NDggNC40NDctNC41NDhzNC40NDcgMi4wMzQgNC40NDcgNC41NDh2LjAyMmguNTc5Yy41NzkgMCAxLjA4Mi0uNDM2IDEuMTY5LTEuMDE3bC4zMTctMi44NDljLjEwOS0xLjA3My0uNTI0LTIuMTAxLTEuNTI5LTIuNDM2ek0xMi45NDUgMTUuMjdsLTMuNzgtLjA1NmMtLjMzOSAwLS41NzktLjM1Ny0uNDQ4LS42ODJsLjc2NS0xLjk3OGMuMTk3LS41MDMuNjQ1LS44NDkgMS4xNjktLjg5NGwyLjI5NC0uMTM0djMuNzQzem04Ljk4MS4xMjNsLTcuMzQyLS4xMDF2LTMuODFsNC4zNTkuMTc5YTEuMzEgMS4zMSAwIDAgMSAuODQxLjQyNWwyLjQwNCAyLjcwNGMuMjA4LjIzNS4wNDQuNjAzLS4yNjIuNjAzeiIvPjwvZz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik0yNy4xMDUgMjAuMTYzYy0xLjc3IDAtMy4yMDEgMS40NjQtMy4yMDEgMy4yNzRzMS40MzEgMy4yNzQgMy4yMDEgMy4yNzQgMy4yMDEtMS40NjQgMy4yMDEtMy4yNzQtMS40MzEtMy4yNzQtMy4yMDEtMy4yNzR6Ii8+PC9kZWZzPjwvc3ZnPg==" alt="" />
                <p className="car_cat_text">Car & taxi</p>
                <hr />
                </div>
                
                <div >
                <img className="cat_img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNOC4wMjYgMTcuMjIyQTUuMDMgNS4wMyAwIDAgMCAzIDIyLjI0OGE1LjAzIDUuMDMgMCAwIDAgNS4wMjYgNS4wMjZjMi43NSAwIDUuMDI2LTIuMjc2IDUuMDI2LTUuMDI2YTUuMDMgNS4wMyAwIDAgMC01LjAyNi01LjAyNnptMCA3LjY4MWEyLjY1NSAyLjY1NSAwIDEgMSAwLTUuMzEgMi42NTUgMi42NTUgMCAxIDEgMCA1LjMxem0yMS42MjItNi45N2wuMzMyLS41NjlhNS44MyA1LjgzIDAgMCAwLTIuOTQtLjgwNmMtLjI4NSAwLS42MTYuMDQ3LS45MDEuMDk1bC0zLjI3Mi02LjYzOC0zLjg0MS0uOTQ4Yy0uMzc5LS4xOS0uODU0LjA0Ny0uOTk2LjQ3NHMuMDQ3Ljg1My40MjcgMS4wNDNsMi43MDMgMS4yMzMuNDI3LjgwNmMtNC45MzEuMzMyLTYuODc1IDIuOTQtOS4xNTEgMS44OTctMS41NjUtLjg1NC00LjAzLTEuMjMzLTUuNTQ4LTEuNDIzLS42NjQtLjA5NS0xLjI4LjQyNy0xLjI4IDEuMTM4YTEuMTYgMS4xNiAwIDAgMCAxLjA0MyAxLjIzM2MxLjQyMi4xNDIgMy40NjEuNDc0IDQuNjQ3IDEuMTM4IDAgMCAzLjMxOSAxLjYxMiAzLjM2NiA2LjExN2EuNzUuNzUgMCAwIDAgLjc1OS43NTloMy4wMzVhLjc3Ljc3IDAgMCAwIC43MTEtLjUyMmMuMzc5LTEuMjggMS40Ny00LjU1MiAzLjg4OC03LjMwMmwuOTAxIDEuNzU0Yy0xLjU2NSAxLjA0My0yLjYwOCAyLjc5Ny0yLjYwOCA0Ljc4OWguNjY0YzAgMi43NSAyLjI3NiA1LjAyNiA1LjAyNiA1LjAyNnM1LjA3My0yLjIyOCA1LjA3My00Ljk3OWE0Ljk4IDQuOTggMCAwIDAtMi40NjYtNC4zMTV6bS0yLjU2IDYuOTdhMi42NTUgMi42NTUgMCAxIDEgMC01LjMxMSAyLjY1NSAyLjY1NSAwIDEgMSAwIDUuMzExem0tMS40NzEtMTEuMjg1Yy4wOTUuMjM3LjMzMi40MjcuNjE2LjQyN2wxLjEzOC4wNDdhLjUyLjUyIDAgMCAwIC41MjItLjY2NGwtLjY2NC0yLjU2YS41MS41MSAwIDAgMC0uODA2LS4zMzJsLTEuMTM4LjkwMWMtLjIzNy4xOS0uMzMyLjUyMi0uMjM3LjgwNmwuNTY5IDEuMzc1eiIvPjwvc3ZnPg==" alt="" />
                <p className="bike_cat_text">Bike</p>
                <hr />
                </div>
                
                <div>
                <img className="cat_img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0ibm9uZSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMTguNTU0IDIxLjcyMmMtLjI1NS4yNTUtLjUxLjI1NS0uNzY1LjI1NXMtLjUxLS4xMjgtLjc2NS0uMjU1bC0zLjgyNi0zLjY5OGMtLjM4My0uMzgzLS4zODMtMS4xNDggMC0xLjUzczEuMTQ4LS4zODMgMS41MyAwbDMuMDYxIDIuOTMzIDEwLjA3NC05LjQzN2MtLjg5My0uODkzLTIuMTY4LTEuNjU4LTMuODI2LTEuOTEzLTMuODI2LS42MzgtNi4yNDkgMi45MzMtNi4yNDkgMi45MzNzLTIuMjk1LTMuNDQzLTYuMTIxLTIuODA2Yy01LjEwMS43NjUtNi43NTkgNS44NjYtNC45NzMgMTAuNTg1IDEuNzg1IDQuODQ2IDguMTYyIDguNTQ0IDEwLjMzIDkuNjkyLjUxLjI1NSAxLjAyLjI1NSAxLjUzIDAgMi4xNjgtMS4xNDggOC41NDQtNC43MTggMTAuNDU3LTkuODE5Ljg5My0yLjQyMy44OTMtNC44NDYgMC02Ljg4NmwtMTAuNDU3IDkuOTQ3eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" alt="" />
                <p className="health_cat_text">Health</p>
                <hr />
                </div>
            </div>

            <div className="car_number">
                <img className="form_car_img" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjggMTYiIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjQuOTg1NyA1LjQ2NDUxLTQuMTU4Mi0uOTY1MTMtMy40NzQyLTMuMTk0NDJjLS45MTIyLS44NDI3ODctMi4wOTI2LTEuMzA0OTYtMy4zMjY2LTEuMzA0OTZoLTQuOTYzMTVjLTEuNDQ4NjkgMC0yLjc3NjY2LjcyMDQ0NS0zLjU1NDY2IDEuOTQzODRsLTEuNjc2NzMgMi41OTYzMy0xLjIzNDA3LjI4NTQ1Yy0xLjEyNjc2LjI1ODI4LTEuOTMxNTg2IDEuMjc3NzgtMS45MzE1ODYgMi40NjAzOXYyLjg2ODE5YzAgMS4zMTg2Ljk3OTIwNiAyLjQwNiAyLjI5Mzc2NiAyLjUxNDhsMS4zODE2Mi4xMjIzYy40MTU4MyAxLjQxMzcgMS42NzY3MyAyLjQ0NjggMy4xOTI0OSAyLjQ0NjggMS40ODg5MyAwIDIuNzM2NDItMS4wMDU5IDMuMTc5MDItMi4zNzg4aDcuMzM3NGMuNDI5MiAxLjM3MjkgMS42OTAxIDIuMzc4OCAzLjE3OTEgMi4zNzg4IDEuNTk2MiAwIDIuOTI0Mi0xLjE0MTggMy4yNTk1LTIuNjUwN2wxLjMwMTItLjQzNWMuOTI1NS0uMjk5IDEuNTQyNi0xLjE2OSAxLjU0MjYtMi4xMzQxdi0xLjU3Njg2YzAtMS40MjcyOS0uOTY1OC0yLjY1MDY5LTIuMzQ3NS0yLjk3Njkzem0tOC44NTMxLTIuODAwMjIgMS45MDQ4IDEuNzY3MTNoLTUuODYxOHYtMi41ODI3M2gxLjg1MTFjLjc3OCAwIDEuNTI5MS4yODU0NiAyLjEwNTkuODE1NnptLTkuMTA3OTUuMjg1NDZjLjQ0MjY2LS42OTMyNiAxLjIwNzI0LTEuMTAxMDYgMi4wMjU0OS0xLjEwMTA2aDEuMzAxMTZ2Mi41ODI3M2gtNC4yNzkwM3ptLjUyMzE0IDEwLjQ1MzI1Yy0uODQ1MDcgMC0xLjUyOTE3LS43MDY5LTEuNTI5MTctMS41NjMyIDAtLjg3LjY4NDEtMS41NjMzIDEuNTI5MTctMS41NjMzczEuNTI5MTcuNzA2OSAxLjUyOTE3IDEuNTYzM2MwIC44NTYzLS42OTc1MSAxLjU2MzItMS41MjkxNyAxLjU2MzJ6bTEzLjY4MjExIDBjLS44NDUxIDAtMS41MjkyLS43MDY5LTEuNTI5Mi0xLjU2MzIgMC0uODcuNjg0MS0xLjU2MzMgMS41MjkyLTEuNTYzMy44NDUgMCAxLjUyOTIuNzA2OSAxLjUyOTIgMS41NjMzIDAgLjg1NjMtLjY4NDIgMS41NjMyLTEuNTI5MiAxLjU2MzJ6bTQuMjc5LTMuMzg0N2MwIC4xNzY3LS4xMDczLjMyNjItLjI4MTcuMzk0MmwtLjg1ODUuMjg1NGMtLjQ2OTUtMS4zMTg1Mi0xLjY5MDEtMi4yNzAwNS0zLjEzODgtMi4yNzAwNS0xLjU2OTQgMC0yLjg4NCAxLjExNDY1LTMuMjQ2MiAyLjU5NjM1aC03LjIwMzJjLS4zNjIyLTEuNDgxNy0xLjY2MzI5LTIuNTk2MzUtMy4yMzI3MS0yLjU5NjM1LTEuNTQyNTkgMC0yLjgzMDMyIDEuMDczODctMy4yMTkzMiAyLjUxNDc1bC0xLjIwNzI0LS4xMDg3Yy0uMzYyMTctLjAyNzItLjYzMDQ1LS4zMjYzLS42MzA0NS0uNjc5N3YtMi44NjgxOWMwLS4zMjYyNC4yMTQ2Mi0uNTk4MS41MzY1NS0uNjY2MDdsMS40ODg5NC0uMzUzNDJoMTUuNzg4MDNsNC4yOTI0Ljk5MjMxYy41NS4xMjIzNC45MzkuNjExNy45MzkgMS4xODI2MXYxLjU3Njg2eiIgZmlsbD0iIzdkODk5YiIvPjwvc3ZnPg==" alt="" />

                <form>
                    <input onChange={(e) => {setCarNumber(e.target.value)}} type="text" placeholder="Enter your car number"/>
                </form>
                
                <button onClick={handleKeyUp} className="insure_now_button">Insure now <span id="arrow">&#129122;</span> </button>
            </div>

            <hr className="form_hr_break" />
            <p className="hr_break_text">OR</p>

            <div className="div_quote">
                <img className="quote_img" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDEgNDAiIHdpZHRoPSI0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjAuNzg3NiA0MGMxMS4wNDU3IDAgMjAtOC45NTQzIDIwLTIwcy04Ljk1NDMtMjAtMjAtMjAtMjAuMDAwMDAyIDguOTU0My0yMC4wMDAwMDIgMjAgOC45NTQzMDIgMjAgMjAuMDAwMDAyIDIweiIgZmlsbD0iIzcwM2JkOSIvPjxnIGZpbGw9IiMxNmMyZjgiPjxwYXRoIGQ9Im0yNy40ODEyIDIyLjcxMDRjLS42MDI1IDAtMS4xODAzLjIzOTQtMS42MDYzLjY2NTRzLS42NjUzIDEuMDAzOC0uNjY1MyAxLjYwNjJjLjAwMDIuNjAyNS4yMzk2IDEuMTgwMS42NjU2IDEuNjA2MS40MjU5LjQyNiAxLjAwMzYuNjY1NCAxLjYwNi42NjU2LjYwMjUgMCAxLjE4MDMtLjIzOTQgMS42MDYzLS42NjU0cy42NjUzLTEuMDAzOC42NjUzLTEuNjA2M2MuMDAwMS0uMjk4My0uMDU4Ni0uNTkzNy0uMTcyNy0uODY5NC0uMTE0MS0uMjc1Ni0uMjgxNC0uNTI2MS0uNDkyNC0uNzM3LS4yMTA5LS4yMTEtLjQ2MTQtLjM3ODMtLjczNzEtLjQ5MjQtLjI3NTYtLjExNDItLjU3MS0uMTcyOS0uODY5NC0uMTcyOHoiLz48cGF0aCBkPSJtMTQuNTgxIDIyLjcyOTJjLS41OTY5IDAtMS4xNjk0LjIzNzItMS41OTE1LjY1OTMtLjQyMi40MjItLjY1OTIuOTk0NS0uNjU5MiAxLjU5MTRzLjIzNzIgMS4xNjk0LjY1OTIgMS41OTE1Yy40MjIxLjQyMi45OTQ2LjY1OTIgMS41OTE1LjY1OTJzMS4xNjk0LS4yMzcyIDEuNTkxNS0uNjU5MmMuNDIyLS40MjIxLjY1OTItLjk5NDYuNjU5Mi0xLjU5MTUgMC0uMjk1Ni0uMDU4My0uNTg4Mi0uMTcxNC0uODYxM3MtLjI3ODgtLjUyMTItLjQ4NzgtLjczMDFjLS4yMDktLjIwOS0uNDU3MS0uMzc0OC0uNzMwMi0uNDg3OS0uMjczMS0uMTEzMi0uNTY1Ny0uMTcxNC0uODYxMy0uMTcxNHoiLz48cGF0aCBkPSJtMzEuMjc0OSAyMC4yOTg2Yy0xLjU1MjItLjUyMTUtMi4wOTU1LS42MzI1LTQuMDc5OS0uOTU2OS0uMzgzNC0uMDYyOS0uNzQ5LS4yMDcyLTEuMDAyLS41MDE0bC0zLjEyMTQtMi45OTQ5Yy0uNDAxLS4zODM5LS45MTc5LS42MjQzLTEuNDY5OS0uNjgzNy0yLjE2NDctLjIzOTItNC4zNDg1LS4yNDk0LTYuNTE1My0uMDMwMy0uMzY2NS4wMzQyLS43MjEzLjE0NjUtMS4wNDA4LjMyOTQtLjMxOTQuMTgyOC0uNTk1OS40MzItLjgxMDkuNzMwN2wtMS42OTg5IDIuMzczM2MtLjA4MTEuMTE1NS0uMjAwOS4xOTgtLjMzNzYuMjMyOGwtMS4wNC4yNjI0Yy0uMzA4NjguMDc3OS0uNTgwNzIuMjYwOC0uNzY5NTcuNTE3MS0uMTg4ODUuMjU2NC0uMjgyNzUuNTcwNC0uMjY1NjguODg4NGwuMTczODIgMy4yMzg2Yy4wMTg4Ny4zNTEuMTcxNTYuNjgxNC40MjY2Ni45MjMycy41OTMxNy4zNzY2Ljk0NDY3LjM3NjdoLjUyNjJjMC0uMDA2MiAwLS4wMTI0IDAtLjAxODYgMC0uNDQ0OS4wODc3LS44ODU0LjI1NzktMS4yOTY0cy40MTk4LS43ODQ0LjczNDMtMS4wOTljLjMxNDYtLjMxNDYuNjg4MS0uNTY0MSAxLjA5OTEtLjczNDMuNDExLS4xNzAzLjg1MTUtLjI1NzkgMS4yOTY0LS4yNTc5LjQ0NDggMCAuODg1My4wODc2IDEuMjk2Mi4yNTc5LjQxMS4xNzAyLjc4NDQuNDE5OCAxLjA5ODkuNzM0My4zMTQ1LjMxNDYuNTY0LjY4ODEuNzM0MSAxLjA5OTEuMTcwMi40MTEuMjU3Ny44NTE1LjI1NzYgMS4yOTYzdi4wMTg2aDYuMTMxMWMwLS4wMDYyIDAtLjAxMjQgMC0uMDE4Ni0uMDAwMS0uNDQ0OC4wODc1LS44ODUzLjI1NzYtMS4yOTYzLjE3MDItLjQxMS40MTk2LS43ODQ1LjczNDEtMS4wOTkxLjMxNDUtLjMxNDUuNjg4LS41NjQxIDEuMDk4OS0uNzM0My40MTEtLjE3MDMuODUxNS0uMjU3OSAxLjI5NjMtLjI1NzkuODk4NCAwIDEuNzYwMS4zNTY5IDIuMzk1NC45OTIycy45OTIyIDEuNDk3Ljk5MjIgMi4zOTU0di4wMTg2aC40NDAxYy4yMTQ1IDAgLjQyMjEtLjA3NjMuNTg1NS0uMjE1NHMuMjcxOS0uMzMxOC4zMDYyLS41NDM2bC4yMzc1LTIuMTIzNGMuMDQzOC0uMzkxOC0uMDQ4NS0uNzg2OC0uMjYxMy0xLjExODdzLS41MzMyLS41ODA1LS45MDc1LS43MDQzem0tMTMuODg2Ni0xLjM5Ny0zLjU3LS4wMzk1Yy0uMDYwNS0uMDAxLS4xMTk5LS4wMTY2LS4xNzMxLS4wNDU1LS4wNTMxLS4wMjg5LS4wOTg1LS4wNzAzLS4xMzIyLS4xMjA1LS4wMzM3LS4wNTAzLS4wNTQ3LS4xMDgtLjA2MTMtLjE2ODEtLjAwNjYtLjA2MDIuMDAxNS0uMTIxLjAyMzYtLjE3NzRsLjU4MDUtMS40NzQ2Yy4wNzE1LS4xODMxLjE5MjctLjM0MjcuMzUtLjQ2MDcuMTU3Mi0uMTE4MS4zNDQzLS4xODk5LjU0MDEtLjIwNzUuNTQ5NS0uMDQ3MyAxLjgzNjMtLjA3NzYgMi40NDQ3LS4xMDI0em02LjE0ODIuMDkzOS00LjkwMTgtLjA3NzZ2LTIuODM0MmMuODc3OS0uMDExNCAxLjc1NTYuMDMzMiAyLjYyNzguMTMzNC4yNDUyLjAyMzMuNDcyOS4xMzcuNjM4OC4zMTlsMS44MzQ2IDIuMDE3OWMuMDM0MS4wMzgyLjA1NjQuMDg1NS4wNjQyLjEzNjEuMDA3Ny4wNTA3LjAwMDYuMTAyNS0uMDIwNS4xNDkxLS4wMjExLjA0NjctLjA1NTMuMDg2Mi0uMDk4NS4xMTM4LS4wNDMxLjAyNzctLjA5MzQuMDQyMi0uMTQ0Ni4wNDE4eiIvPjwvZz48ZyBmaWxsPSIjZmZlNDZlIj48cGF0aCBkPSJtMjEuNTgzNCAxMS4yNDA4Yy0uMTY5Ni0uMjA0Ni0uMzk1MS0uMzU1NC0uNjQ5LS40MzM4LS4yNTM5LS4wNzg1LS41MjUyLS4wODEyLS43ODA2LS4wMDc4LS45MjEyLjI0NTItMS42OTI3IDEuMjk4NC0yLjA3NjggMi43ODM4LS4zODgxLTEuNDg1NC0xLjE1NTYtMi41Mzg2LTIuMDc2OC0yLjc4MzgtLjI1NTUtLjA3MjktLjUyNjYtLjA2OTktLjc4MDQuMDA4NXMtLjQ3OTMuMjI4OS0uNjQ5Mi40MzMxYy0uMzI2LjM3NzItLjQwMi45MDU3LS4yMDMzIDEuNDE0OC4zODQxLjk4NTYgMS42Mjk4IDEuNjkwMyAzLjMzMjUgMS44ODQzbC4xNzc3LjAyMDJoLjQwOThsLjE2NjEtLjAxODZjMS43MDI3LS4xOTQgMi45NDkxLS44OTg3IDMuMzMzMy0xLjg4NDQuMTk4Ny0uNTEwNi4xMjI2LTEuMDM5MS0uMjAzMy0xLjQxNjN6bS02LjIwODggMS4xNDYzYy0uMDM3Mi0uMDk2My0uMDc3Ni0uMjc4Ny4wNDA0LS40MTkxLjAzNi0uMDQ3NC4wODIzLS4wODYuMTM1NC0uMTEyOXMuMTExNi0uMDQxNC4xNzExLS4wNDIzYy4wNDI4LjAwMDQuMDg1My4wMDY0LjEyNjYuMDE3OC4zNzk1LjEwMDkuODQyLjYxMTYgMS4xMTk4IDEuNTQwNS0uOTYzOS0uMjA2NC0xLjQ1OS0uNjQxOC0xLjU5MzMtLjk4NHptNS40MDU1IDBjLS4xMzQzLjM0NDYtLjYyOTQuNzc2MS0xLjU5MzMuOTg3Mi4yNzg2LS45MzE0Ljc0MTItMS40Mzk3IDEuMTE5OS0xLjU0MDYuMDQxNS0uMDExMy4wODQyLS4wMTczLjEyNzMtLjAxNzguMDYwMS4wMDAzLjExOTQuMDE0NS4xNzMzLjA0MTQuMDUzOC4wMjY5LjEwMDcuMDY1OC4xMzcxLjExMzguMTE3Mi4xMzczLjA3MjkuMzE5Ny4wMzQ5LjQxNnoiLz48cGF0aCBkPSJtMTguODQ3OSAxNC45NzQ2aC0xLjQ1OTh2MTAuMDA3N2gxLjQ1OTh6Ii8+PC9nPjwvc3ZnPg==" alt="" />
                <p className="quote_text_bold">Looking to insure your new car?</p>
                <p className="quote_text">Save big with out zero commission insurance</p>
                <button className="get_a_quote">Get a quote</button>
            </div>

            <div className="banner">
                <img className="banner_left" src="https://acko-home-prod.ackoassets.com/next_assets/eb5a39996779eebb83cae41d02d9f74d91aedcf7/_next/static/images/arshad-warsi-banner-58d51f52b11fa83c7786a80bd1a02169.png" alt="" />
                <img className="banner_middle" src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2Feb5a39996779eebb83cae41d02d9f74d91aedcf7%2F_next%2Fstatic%2Fimages%2Ftypo-low-premium-new-884973769e7a8f45764b63addb7a6b14.svg&w=256&q=75" alt="" />
                <div className="partners"> 
                    <div className="partners_text_div">
                    <p className="partners_text">Official Insurance Partner</p>
                    </div>
                    <div className="ipl_teams">
                        <img className="ipl_team_img" src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2Feb5a39996779eebb83cae41d02d9f74d91aedcf7%2F_next%2Fstatic%2Fimages%2Fsunrisers-hyderabad-baa8b5ac7605cd2fa307c8de9b5a36a5.svg&w=48&q=75" alt="" />
                        <img className="ipl_team_img" src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2Feb5a39996779eebb83cae41d02d9f74d91aedcf7%2F_next%2Fstatic%2Fimages%2Fdelhi-capitals-88769317f23983e5c4439560a4efdf5f.svg&w=48&q=75" alt="" />
                        <img className="ipl_team_img" src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2Feb5a39996779eebb83cae41d02d9f74d91aedcf7%2F_next%2Fstatic%2Fimages%2Fmumbai-indians-678e33cfeb6c33bad8102ccfeccadad7.svg&w=64&q=75" alt="" />
                    </div>
                </div>
            </div>

            <img className="right_banner" src="https://acko-home-prod.ackoassets.com/next_assets/eb5a39996779eebb83cae41d02d9f74d91aedcf7/_next/static/images/homepage-banner-illustration-2-99577afed0f02e7ee1411f1e8aede6c9.svg" alt="right-banner" />
            
        </div>
    )
}