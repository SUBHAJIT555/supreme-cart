"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colors, setPrimaryColor, resetToDefault, presetColors } = useTheme();
  const [customColor, setCustomColor] = useState(colors.primary);

  // Update custom color when theme colors change
  useEffect(() => {
    setCustomColor(colors.primary);
  }, [colors.primary]);

  const handlePresetColorClick = (color: string) => {
    setPrimaryColor(color);
    setCustomColor(color);
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setCustomColor(color);
    setPrimaryColor(color);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[99999]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-white shadow-lg border-2 border-gray-3 flex items-center justify-center hover:shadow-xl transition-all duration-200 group"
        aria-label="Open color picker"
        style={{ borderColor: colors.primary }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200 group-hover:rotate-180"
          style={{ color: colors.primary }}
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
            fill="currentColor"
          />
          <path
            d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {/* Color Picker Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-3 p-6 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-dark text-lg">Theme Colors</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-dark transition-colors"
              aria-label="Close color picker"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Current Color Display */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-dark mb-2">
              Current Primary Color
            </label>
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg border-2 border-gray-3 shadow-sm"
                style={{ backgroundColor: colors.primary }}
              />
              <div className="flex-1">
                <div className="text-sm font-mono text-gray-600">{colors.primary}</div>
                <div className="text-xs text-gray-500 mt-1">
                  Dark: {colors.primaryDark} | Light: {colors.primaryLight}
                </div>
              </div>
            </div>
          </div>

          {/* Preset Colors */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-dark mb-3">
              Preset Colors
            </label>
            <div className="grid grid-cols-8 gap-2">
              {presetColors.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => handlePresetColorClick(preset.value)}
                  className="w-8 h-8 rounded-lg border-2 transition-all hover:scale-110 hover:shadow-md"
                  style={{
                    backgroundColor: preset.value,
                    borderColor:
                      colors.primary === preset.value ? colors.primaryDark : "#E5E7EB",
                  }}
                  title={preset.name}
                  aria-label={`Select ${preset.name} color`}
                />
              ))}
            </div>
          </div>

          {/* Custom Color Picker */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-dark mb-2">
              Custom Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={customColor}
                onChange={handleCustomColorChange}
                className="w-12 h-12 rounded-lg border-2 border-gray-3 cursor-pointer"
                aria-label="Custom color picker"
              />
              <input
                type="text"
                value={customColor}
                onChange={(e) => {
                  const value = e.target.value;
                  setCustomColor(value);
                  if (/^#[0-9A-F]{6}$/i.test(value)) {
                    setPrimaryColor(value);
                  }
                }}
                placeholder="#3C50E0"
                className="flex-1 px-3 py-2 border border-gray-3 rounded-md text-sm font-mono focus-ring-primary"
                style={{ "--tw-ring-color": colors.primary } as React.CSSProperties}
              />
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              resetToDefault();
              setCustomColor("#3C50E0");
            }}
            className="w-full py-2 px-4 bg-gray-1 hover:bg-gray-2 text-dark rounded-md text-sm font-medium transition-colors border border-gray-3"
          >
            Reset to Default
          </button>

          {/* Info */}
          <p className="text-xs text-gray-500 mt-4 text-center">
            Changes are saved automatically
          </p>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
