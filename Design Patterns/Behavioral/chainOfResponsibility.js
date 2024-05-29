// Base class for logging handlers
class Logger {
  constructor(level) {
    this.level = level;
    this.next = null;
  }

  setNext(logger) {
    this.next = logger;
  }

  // Template method for handling logs
  log(message, level) {
    if (this.level <= level) {
      this.writeMessage(message);
    }
    if (this.next) {
      this.next.log(message, level);
    }
  }

  // Abstract method to write message (to be implemented by subclasses)
  writeMessage(message) {
    throw new Error("Method writeMessage must be implemented");
  }
}

// Concrete handler for writing log messages to console
class ConsoleLogger extends Logger {
  constructor(level) {
    super(level);
  }

  writeMessage(message) {
    console.log(`[Console Logger] ${message}`);
  }
}

// Concrete handler for writing log messages to a file
class FileLogger extends Logger {
  constructor(level) {
    super(level);
  }

  writeMessage(message) {
    console.log(`[File Logger] ${message}`);
  }
}

// Concrete handler for writing log messages to a database
class DatabaseLogger extends Logger {
  constructor(level) {
    super(level);
  }

  writeMessage(message) {
    console.log(`[Database Logger] ${message}`);
  }
}

// Usage
const consoleLogger = new ConsoleLogger(1); // Info level
const fileLogger = new FileLogger(2); // Warning level
const databaseLogger = new DatabaseLogger(3); // Error level

consoleLogger.setNext(fileLogger);
fileLogger.setNext(databaseLogger);

// Test log messages
consoleLogger.log("Info message", 1);
consoleLogger.log("Warning message", 2);
consoleLogger.log("Error message", 3);
