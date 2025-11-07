.PHONY: dev install clean setup-pnpm

# Default target - runs the full development setup
dev: setup-pnpm install
	@echo "Starting development server..."
	pnpm run dev

# Ensure pnpm is installed
setup-pnpm:
	@if ! command -v pnpm >/dev/null 2>&1; then \
		echo "Installing pnpm..."; \
		npm install -g pnpm; \
	else \
		echo "pnpm is already installed"; \
	fi

# Install all dependencies
install:
	@echo "Installing dependencies with pnpm..."
	pnpm install

# Clean build artifacts and dependencies
clean:
	@echo "Cleaning build artifacts..."
	rm -rf node_modules dist dist-ssr
	@echo "Clean complete!"