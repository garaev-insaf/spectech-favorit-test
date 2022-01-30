import * as React from "react";
import { useRef, useEffect, useState } from "react";
import "./styles/FilterMain.scss";

const FilterMain = ({filterVisibleState}) => {
	// refs for date inputs
	const firstDateRef = useRef();
	const secondDateRef = useRef();
	const thirdDateRef = useRef();
	const fourthDateRef = useRef();

    // phone number validation
    const getInputNumbersValue = (input) => {
		// Return stripped input value — just numbers
		return input.replace(/\D/g, "");
	};
	useEffect(() => {
		var phoneInputs = document.querySelectorAll('input[name="phone"]');
		console.log(phoneInputs);
		const getInputNumbersValue = (input) => {
			// Return stripped input value — just numbers
			return input.value.replace(/\D/g, "");
		};
		var onPhonePaste = function (e) {
			var input = e.target,
				inputNumbersValue = getInputNumbersValue(input);
			var pasted = e.clipboardData || window.clipboardData;
			if (pasted) {
				var pastedText = pasted.getData("Text");
				if (/\D/g.test(pastedText)) {
					// Attempt to paste non-numeric symbol — remove all non-numeric symbols,
					// formatting will be in onPhoneInput handler
					input.value = inputNumbersValue;
					return;
				}
			}
		};

		var onPhoneInput = function (e) {
			var input = e.target,
				inputNumbersValue = getInputNumbersValue(input),
				selectionStart = input.selectionStart,
				formattedInputValue = "";

			if (!inputNumbersValue) {
				return (input.value = "");
			}

			if (input.value.length != selectionStart) {
				// Editing in the middle of input, not last symbol
				if (e.data && /\D/g.test(e.data)) {
					// Attempt to input non-numeric symbol
					input.value = inputNumbersValue;
				}
				return;
			}

			if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
				if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
				var firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
				formattedInputValue = input.value = firstSymbols + " ";
				if (inputNumbersValue.length > 1) {
					formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
				}
				if (inputNumbersValue.length >= 5) {
					formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
				}
				if (inputNumbersValue.length >= 8) {
					formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
				}
				if (inputNumbersValue.length >= 10) {
					formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
				}
			} else {
				formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
			}
			input.value = formattedInputValue;
		};
		var onPhoneKeyDown = function (e) {
			// Clear input after remove last symbol
			var inputValue = e.target.value.replace(/\D/g, "");
			if (e.keyCode == 8 && inputValue.length == 1) {
				e.target.value = "";
			}
		};
		for (var phoneInput of phoneInputs) {
			phoneInput.addEventListener("keydown", onPhoneKeyDown);
			phoneInput.addEventListener("input", onPhoneInput, false);
			phoneInput.addEventListener("paste", onPhonePaste, false);
		}
	}, []);

	return (
		<main className={`filter-main filter-main${filterVisibleState ? '_active' : '_passive'}`}>
			<div className="first-row row">
				<div className="first-col col">
					<input
						type="text"
						ref={firstDateRef}
						name="date"
						id=""
						placeholder="Дата от"
						onFocus={() => (firstDateRef.current.type = "date")}
						onBlur={() => (firstDateRef.current.type = "text")}
					/>
					<input
						type="text"
						ref={secondDateRef}
						name="date"
						id=""
						placeholder="Дата до"
						onFocus={() => (secondDateRef.current.type = "date")}
						onBlur={() => (secondDateRef.current.type = "text")}
					/>
				</div>
				<div className="second-col col">
					<input
						type="text"
						ref={thirdDateRef}
						name="date"
						id=""
						placeholder="Дата от"
						onFocus={() => (thirdDateRef.current.type = "date")}
						onBlur={() => (thirdDateRef.current.type = "text")}
					/>
					<input
						type="text"
						ref={fourthDateRef}
						name="date"
						id=""
						placeholder="Дата до"
						onFocus={() => (fourthDateRef.current.type = "date")}
						onBlur={() => (fourthDateRef.current.type = "text")}
					/>
				</div>
			</div>
			<div className="second-row row">
				<div className="first-col col">
					<input type="text" name="" id="" placeholder="Имя клиента"/>
					<input type="tel" name="phone" placeholder="Введите телефон" maxLength="18" />
				</div>
				<div className="second-col col">
					<input type="text" name="" id="" placeholder="Имя клиента"/>
					<input type="tel" name="phone" placeholder="Введите телефон" maxLength="18" />
				</div>
			</div>
		</main>
	);
};
export { FilterMain };
